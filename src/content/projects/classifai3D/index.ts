import * as THREE from "three";

import CanvasController from "../default";
import classifai3DControls from "./classifai3D.controls";
import {
  createCamera,
  createCameraLight,
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
import ReticleHandler from "./helpers/ReticleHandler";
import SpriteHandler from "./helpers/spriteHandler";
import {
  getConnectedStructureGeometries,
  scanSize,
  voxelCount,
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
  public meshGroup: THREE.Group;
  public meshAnimationGroup: THREE.Group;

  public meshes!: THREE.Mesh[];
  private materials!: THREE.MeshPhongMaterial[];

  public navigator!: NavigationHandler;
  public spriteHandler!: SpriteHandler;
  private annotator!: AnnotationHandler;
  private reticleHandler: ReticleHandler;

  private renderDirty = true;
  public arActive = false;
  private lastTimestamp = 0;

  public pointerLocked = false;
  private hoveredStructureIndex?: number;
  private structureSelection: number[] = [];

  public activeTool = Tool.Selection;

  private crosshair: HTMLElement | null;

  private lastMouseEvent?: MouseEvent;

  constructor(canvas: HTMLCanvasElement, updateUI: () => void) {
    super(canvas, updateUI);

    this.crosshair = document.getElementById("crosshairPointer");

    this.renderer = createRenderer(canvas);
    this.camera = createCamera(canvas, scanSize);

    const [lights, lightTargets] = createLights(voxelCount);
    this.scene.add(...lights, ...lightTargets);

    const cameraLight = createCameraLight(this.camera);
    this.scene.add(cameraLight, cameraLight.target);

    this.meshGroup = createMeshGroup();
    this.meshAnimationGroup = new THREE.Group();
    this.meshGroup.add(this.meshAnimationGroup);

    document.addEventListener("click", this.handleClick);
    document.addEventListener("mousemove", this.handleMouseMove);
    canvas.addEventListener("wheel", this.handleWheel);
    canvas.addEventListener("touchstart", this.fakeClickOnTouchStart);

    this.spriteHandler = new SpriteHandler(this);
    this.meshAnimationGroup.add(this.spriteHandler.spriteGroup);

    this.navigator = new NavigationHandler(
      this,
      this.canvas,
      this.spriteHandler,
      cameraLight,
    );

    this.camera.position.copy(
      this.meshGroup.localToWorld(
        new THREE.Vector3(
          -0.25 * scanSize.x,
          1.25 * scanSize.y,
          1.25 * scanSize.z,
        ),
      ),
    );
    const target = this.meshGroup.localToWorld(
      this.spriteHandler.spriteGroup.position.clone(),
    );
    this.camera.lookAt(target);
    cameraLight.target.position.copy(target);

    this.reticleHandler = new ReticleHandler(this.renderer, this.scene);

    this.controls = classifai3DControls(this);

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Promise.all(getConnectedStructureGeometries()).then((geometries) => {
      this.meshes = createMeshes(geometries);
      this.materials = getMaterials(this.meshes);

      this.meshAnimationGroup.add(...this.meshes);

      this.scene.add(this.meshGroup);
      this.meshGroup.updateMatrixWorld(true);

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

  private animate = (timestamp: number, frame?: THREE.XRFrame) => {
    const delta = timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;

    this.keyEventHandler.tick();

    if (this.arActive) {
      this.spriteHandler.updateRenderOrder();

      // up/down animation
      this.meshAnimationGroup.position.z =
        (Math.sin(timestamp / 1000) + 1) / 80;

      // rotation animation
      this.meshAnimationGroup.translateX(scanSize.x / 2);
      this.meshAnimationGroup.translateY(scanSize.y / 2);
      this.meshAnimationGroup.rotateZ(delta / 5000);
      this.meshAnimationGroup.translateX(-scanSize.x / 2);
      this.meshAnimationGroup.translateY(-scanSize.y / 2);

      if (frame) {
        this.reticleHandler.update(frame);
      }
    }

    if (this.renderDirty || this.arActive) this.forceRender();
  };

  public render = () => {
    this.renderDirty = true;
  };

  private forceRender = () => {
    this.renderDirty = false;

    this.updateHover();

    this.renderer.render(this.scene, this.camera);
  };

  public enterAR = () => {
    if (!("xr" in navigator)) return;

    (navigator as THREE.Navigator)
      .xr!.requestSession("immersive-ar", { requiredFeatures: ["hit-test"] })
      .then((session) => {
        this.arActive = true;
        this.removeHoveredStructure();

        this.renderer.xr.setReferenceSpaceType("local");
        this.renderer.xr.setSession(session);

        this.reticleHandler.activate();

        this.updateUI();

        const controller = this.renderer.xr.getController(0);
        controller.addEventListener("select", () => {
          if (this.reticleHandler.reticleActive) {
            this.meshGroup.position.setFromMatrixPosition(
              this.reticleHandler.reticleMatrix,
            );
            this.meshGroup.translateX(-scanSize.x / 2);
            this.meshGroup.translateY(-scanSize.y / 2);
          }
        });
        this.scene.add(controller);
      })
      .catch(() => {});
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
    if (!this.lastMouseEvent || this.arActive) return;

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
    if (this.arActive) return;

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
