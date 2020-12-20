import * as THREE from "three";

import CanvasController from "../default";
import classifai3DControls from "./classifai3D.controls";
import {
  createCamera,
  createLights,
  createMeshes,
  createMeshGroup,
  createPickingMeshes,
  createRenderer,
  getMaterials,
} from "./creators";
import AnnotationHandler from "./helpers/annotationHandler";
import KeyEventHandler from "./helpers/keyEventHandler";
import NavigationHandler from "./helpers/navigationHandler";
import SpriteHandler from "./helpers/spriteHandler";
import {
  getConnectedStructureGeometries,
  voxelCount,
  voxelDimensions,
} from "./staticScan";
import {
  defaultStructureColor,
  hoveredSelectedStructureColor,
  hoveredStructureColor,
  selectedStructureColor,
} from "./theme";
import { ClickPosition, Pixel, Tool } from "./types";
import { getIntersectionsFromClickPosition } from "./utils/picking";
import { resizeRenderer } from "./utils/scaling";

export default class Classifai3D extends CanvasController {
  private keyEventHandler!: KeyEventHandler;

  private renderer: THREE.WebGLRenderer;
  public camera: THREE.PerspectiveCamera;
  private scene = new THREE.Scene();

  private pickingScene = new THREE.Scene();
  private pickingTexture = new THREE.WebGLRenderTarget(1, 1);
  private pickingMeshes!: THREE.Mesh[];

  public meshes!: THREE.Mesh[];
  private materials!: THREE.MeshPhongMaterial[];

  public navigator!: NavigationHandler;
  public spriteHandler!: SpriteHandler;
  private annotator!: AnnotationHandler;

  private renderDirty = true;

  public pointerLocked = false;
  private hoveredStructureIndex?: number;
  private structureSelection: number[] = [];

  public activeTool = Tool.Selection;

  private crosshair: HTMLElement | null;

  private lastMouseEvent?: MouseEvent;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.crosshair = document.getElementById("crosshairPointer");

    this.scene.scale.set(
      voxelDimensions.x,
      voxelDimensions.z,
      voxelDimensions.y,
    );
    this.pickingScene.scale.set(
      voxelDimensions.x,
      voxelDimensions.z,
      voxelDimensions.y,
    );

    this.renderer = createRenderer(canvas);
    this.camera = createCamera(canvas, voxelCount, voxelDimensions);

    const [lights, lightTargets] = createLights(voxelCount);
    this.scene.add(...lights, ...lightTargets);

    document.addEventListener("click", this.handleClick);
    document.addEventListener("mousemove", this.handleMouseMove);
    canvas.addEventListener("wheel", this.handleWheel);
    canvas.addEventListener("touchstart", this.fakeClickOnTouchStart);

    this.spriteHandler = new SpriteHandler(this);
    this.navigator = new NavigationHandler(
      this,
      this.canvas,
      this.spriteHandler,
    );

    const scanSize = {
      x: voxelCount.x * voxelDimensions.x,
      y: voxelCount.y * voxelDimensions.y,
      z: voxelCount.z * voxelDimensions.z,
    };

    this.camera.position.set(
      -0.25 * scanSize.x,
      1.25 * scanSize.z,
      -1.25 * scanSize.y,
    );
    this.camera.lookAt(scanSize.x / 2, scanSize.z / 2, -scanSize.y / 2);

    this.controls = classifai3DControls(this);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Promise.all(getConnectedStructureGeometries()).then((geometries) => {
      this.meshes = createMeshes(geometries);
      this.materials = getMaterials(this.meshes);

      const meshGroup = createMeshGroup();

      meshGroup.add(...this.meshes);
      meshGroup.add(this.spriteHandler.spriteGroup);

      this.scene.add(meshGroup);
      meshGroup.updateMatrixWorld(true);

      this.pickingMeshes = createPickingMeshes(geometries);
      const pickingGroup = createMeshGroup();
      pickingGroup.add(...this.pickingMeshes);
      this.pickingScene.add(pickingGroup);

      this.annotator = new AnnotationHandler(
        this,
        this.meshes,
        this.pickingMeshes,
      );

      this.keyEventHandler = new KeyEventHandler(this);

      this.spriteHandler.updateRenderOrder();
      this.renderer.setAnimationLoop(this.animate);
    });
  }

  public dispose() {
    super.dispose();

    document.removeEventListener("click", this.handleClick);
    document.removeEventListener("mousemove", this.handleMouseMove);
    this.canvas.removeEventListener("wheel", this.handleWheel);
    this.canvas.removeEventListener("touchstart", this.fakeClickOnTouchStart);

    this.navigator.dispose();
    this.keyEventHandler.dispose();
  }

  protected resizeCanvas(): void {
    resizeRenderer(this.renderer);
    this.camera.aspect = this.canvas.width / this.canvas.height;
    this.camera.updateProjectionMatrix();
    this.forceRender();
  }

  private animate = () => {
    this.keyEventHandler.tick();

    if (this.renderDirty) this.forceRender();
  };

  public render = () => {
    this.renderDirty = true;
  };

  private forceRender = () => {
    this.renderDirty = false;

    this.updateHover();

    this.renderer.render(this.scene, this.camera);
  };

  public togglePointerLock = () => {
    this.pointerLocked = !this.pointerLocked;
    if (this.pointerLocked) {
      if (this.crosshair) this.crosshair.style.display = "flex";
      this.canvas.removeEventListener("wheel", this.handleWheel);
      document.addEventListener("wheel", this.handleWheel);
    } else {
      if (this.crosshair) this.crosshair.style.display = "none";
      document.removeEventListener("wheel", this.handleWheel);
      this.canvas.addEventListener("wheel", this.handleWheel);
    }
  };

  public setActiveTool = (tool: Tool) => {
    this.activeTool = tool;
  };

  public undo = () => {
    this.annotator.undo();
  };

  public redo = () => {
    this.annotator.redo();
  };

  private selects = (index: number) => this.structureSelection.includes(index);
  private hovers = (index: number) => this.hoveredStructureIndex === index;

  public updateColor = (index: number) => {
    // eslint-disable-next-line no-nested-ternary
    const color = this.selects(index)
      ? this.hovers(index)
        ? hoveredSelectedStructureColor
        : selectedStructureColor
      : this.hovers(index)
      ? hoveredStructureColor
      : defaultStructureColor;

    this.materials[index].color = new THREE.Color(color);
  };

  private updateHover = () => {
    if (!this.lastMouseEvent) return;

    let pointer: Pixel;
    if (this.pointerLocked) {
      pointer = {
        x: Math.floor(this.canvas.width / 2),
        y: Math.floor(this.canvas.height / 2),
      };
    } else {
      const canvasBox = this.canvas.getBoundingClientRect();

      const style = getComputedStyle(this.canvas);
      // eslint-disable-next-line radix
      const borderLeft = parseInt(style.borderLeftWidth);
      // eslint-disable-next-line radix
      const borderTop = parseInt(style.borderTopWidth);

      pointer = {
        x:
          (this.lastMouseEvent.clientX - canvasBox.left - borderLeft) *
          window.devicePixelRatio,
        y:
          (this.lastMouseEvent.clientY - canvasBox.top - borderTop) *
          window.devicePixelRatio,
      };
    }

    this.camera.setViewOffset(
      this.canvas.width,
      this.canvas.height,
      pointer.x,
      pointer.y,
      1,
      1,
    );

    this.renderer.setRenderTarget(this.pickingTexture);
    this.renderer.render(this.pickingScene, this.camera);

    this.camera.clearViewOffset();

    const pixelBuffer = new Uint8Array(4);
    this.renderer.readRenderTargetPixels(
      this.pickingTexture,
      0,
      0,
      1,
      1,
      pixelBuffer,
    );

    this.renderer.setRenderTarget(null);

    const pickedIndex =
      ((pixelBuffer[0] << 16) | (pixelBuffer[1] << 8) | pixelBuffer[2]) - 1;

    if (pickedIndex < 0) {
      this.removeHoveredStructure();
    } else if (this.hoveredStructureIndex !== pickedIndex) {
      this.removeHoveredStructure();
      this.hoverIndex(pickedIndex);
    }
  };

  private removeHoveredStructure = () => {
    if (this.hoveredStructureIndex === undefined) return;
    const oldHover = this.hoveredStructureIndex;
    this.hoveredStructureIndex = undefined;
    this.updateColor(oldHover);
  };

  private hoverIndex = (index: number) => {
    this.hoveredStructureIndex = index;
    this.updateColor(index);
  };

  private select = (index: number) => {
    if (this.selects(index)) {
      const selectionIndex = this.structureSelection.indexOf(index);
      this.structureSelection.splice(selectionIndex, 1);
    } else {
      this.structureSelection.push(index);
    }
    this.updateColor(index);
  };

  public deleteSelection = () => {
    this.annotator.deleteConnectedStructures(this.structureSelection);
    this.structureSelection = [];

    this.render();
  };

  public invertSelection = () => {
    for (let index = 0; index < this.meshes.length; index++) {
      this.select(index);
    }

    this.render();
  };

  public clearSelection = () => {
    const oldSelection: number[] = [];
    this.structureSelection.forEach((index) => oldSelection.push(index));

    oldSelection.forEach((index) => {
      this.select(index);
    });

    this.render();
  };

  private fakeClickOnTouchStart = (event: TouchEvent) => {
    if (event.touches.length !== 1) {
      return;
    }
    const touch = event.touches[0];
    this.handleClick(touch);
  };

  private handleClick = (event: ClickPosition) => {
    const intersections = getIntersectionsFromClickPosition(
      event,
      this.meshes,
      this.canvas,
      this.camera,
      this.pointerLocked,
    );

    const intersection = intersections.find((i) => i.object.visible);
    if (intersection) {
      const clickedObject = intersection.object;
      const { index } = clickedObject.userData;

      switch (this.activeTool) {
        case Tool.Eraser:
          this.annotator.deleteConnectedStructures([index]);
          if (this.selects(index)) this.select(index);
          break;
        case Tool.Selection:
          this.select(index);
          break;
        default:
          break;
      }

      this.render();
    }
  };

  private handleMouseMove = (event: MouseEvent) => {
    this.lastMouseEvent = event;
    this.render();
  };

  private handleWheel = (event: WheelEvent) => {
    event.preventDefault();

    if (event.deltaY > 0) {
      this.navigator.increaseSpritePosition();
    } else if (event.deltaY < 0) {
      this.navigator.decreaseSpritePosition();
    }
  };
}
