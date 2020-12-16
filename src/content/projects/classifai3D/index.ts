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
import NavigationHandler from "./helpers/navigationHandler";
import SpriteHandler from "./helpers/spriteHandler";
import {
  getConnectedStructureGeometries,
  voxelCount,
  voxelDimensions,
} from "./staticScan";
import { getIntersectionsFromMouseEvent } from "./utils/picking";
import { resizeRenderer } from "./utils/scaling";

export default class Classifai3D extends CanvasController {
  private renderer: THREE.WebGLRenderer;
  public camera: THREE.PerspectiveCamera;
  private scene = new THREE.Scene();

  private pickingScene = new THREE.Scene();
  private pickingTexture = new THREE.WebGLRenderTarget(1, 1);

  private meshes!: THREE.Mesh[];
  private materials!: THREE.MeshPhongMaterial[];

  public navigator!: NavigationHandler;
  public spriteHandler!: SpriteHandler;

  private renderDirty = true;

  public pointerLocked = false;

  private lastMouseEvent?: MouseEvent;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);

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

    // Todo: Navigation

    const [lights, lightTargets] = createLights(voxelCount);
    this.scene.add(...lights, ...lightTargets);

    document.addEventListener("click", this.handleClick);
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("wheel", this.handleWheel);

    this.spriteHandler = new SpriteHandler(this);
    this.navigator = new NavigationHandler(
      this,
      this.canvas,
      this.spriteHandler,
    );

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

      const pickingMeshes = createPickingMeshes(geometries);
      const pickingGroup = createMeshGroup();
      pickingGroup.add(...pickingMeshes);
      this.pickingScene.add(pickingGroup);

      this.spriteHandler.updateRenderOrder();
      this.renderer.setAnimationLoop(this.animate);
    });
  }

  public dispose() {
    super.dispose();

    document.removeEventListener("click", this.handleClick);
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("wheel", this.handleWheel);

    this.navigator.dispose();
  }

  protected resizeCanvas(): void {
    resizeRenderer(this.renderer);
    this.camera.aspect = this.canvas.width / this.canvas.height;
    this.camera.updateProjectionMatrix();
    this.forceRender();
  }

  private animate = () => {
    this.navigator.navigate();

    if (this.renderDirty) this.forceRender();
  };

  public render = () => {
    this.renderDirty = true;
  };

  private forceRender = () => {
    this.renderDirty = false;

    this.renderer.render(this.scene, this.camera);
  };

  public togglePointerLock = () => {
    this.pointerLocked = !this.pointerLocked;
  };

  private deleteConnectedStructures = (objects: THREE.Object3D[]) => {
    objects.forEach((object) => {
      // eslint-disable-next-line no-param-reassign
      object.visible = false;
    });
  };

  private handleClick = (event: MouseEvent) => {
    const intersections = getIntersectionsFromMouseEvent(
      event,
      this.meshes,
      this.canvas,
      this.camera,
      this.pointerLocked,
    );

    const intersection = intersections.find((i) => i.object.visible);
    if (intersection) {
      const clickedObject = intersection.object;
      // const { index } = clickedObject.userData;

      // switch (this.activeTool) {
      //   case Tool.PixelEraser:
      this.deleteConnectedStructures([clickedObject]);
      //     if (this.selects(index)) this.select(index);
      //     break;
      //   case Tool.Hand:
      //     this.select(index);
      //     break;
      //   default:
      //     break;
      // }

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
