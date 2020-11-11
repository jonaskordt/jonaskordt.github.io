import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import CanvasController from "../default";
import {
  createCamera,
  createCameraControls,
  createMaterials,
  createRenderer,
  createSplitPlanes,
} from "./creators";
import {
  getIntersectionsFromPointer,
  removeEventListeners,
  setUpEventListeners,
} from "./interaction";
import transparentPlanesControls from "./transparentPlanes.controls";

class TransparentPlanes extends CanvasController {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;

  private materials: THREE.MeshBasicMaterial[];
  private planes: THREE.Mesh[][];
  private planeGroup: THREE.Group = new THREE.Group();

  private cameraControls: OrbitControls;
  private updateCameraControls = true;

  private lastMouseEvent?: MouseEvent;

  private renderDirty = true;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.controls = transparentPlanesControls(this);

    this.renderer = createRenderer(canvas);
    this.camera = createCamera(canvas);

    this.materials = createMaterials();

    this.planes = createSplitPlanes(this.materials);
    this.planeGroup.add(...this.planes.flat());
    this.scene.add(this.planeGroup);

    this.cameraControls = createCameraControls(
      this.camera,
      this.canvas,
      this.render,
    );

    setUpEventListeners(this.canvas, this.onMouseMove, this.onScroll);

    this.animate();
  }

  public dispose(): void {
    super.dispose();
    removeEventListeners(this.canvas, this.onMouseMove, this.onScroll);
  }

  protected resizeCanvas(): void {
    const parent = this.canvas.parentElement;
    if (!parent) return;

    this.renderer.setSize(parent.clientWidth, parent.clientHeight);
    this.camera.aspect = this.canvas.width / this.canvas.height;
    this.camera.updateProjectionMatrix();
    this.forceRender();
  }

  private animate = () => {
    window.requestAnimationFrame(this.animate);

    if (this.updateCameraControls) this.cameraControls.update();

    if (this.renderDirty) this.forceRender();
  };

  public render: () => void = () => {
    this.renderDirty = true;
  };

  public setOpacity: (opacity: number) => void = (opacity: number) => {
    this.materials.forEach((material) => material.setValues({ opacity }));
    this.render();
  };

  public setSmoothCameraControls: (state: boolean) => void = (
    state: boolean,
  ) => {
    this.updateCameraControls = state;
    this.cameraControls.enableDamping = state;
  };

  private onMouseMove = (e: MouseEvent) => {
    this.lastMouseEvent = e;
  };

  private onScroll = (e: WheelEvent) => {
    if (e.ctrlKey || e.metaKey) {
      // Stop the event to propagate to the orbit controls if custom control conditions apply
      e.stopPropagation();

      if (!this.lastMouseEvent || e.deltaY === 0) return;

      const lastPointerPosition = {
        x: this.lastMouseEvent.x,
        y: this.lastMouseEvent.y,
      };
      const intersections = getIntersectionsFromPointer(
        lastPointerPosition,
        this.planes.flat(),
        this.canvas,
        this.camera,
      );

      if (!intersections.length) return;

      const hoveredPlaneIndex = intersections[0].object.userData
        .index as number;

      const step = e.deltaY > 0 ? 1 / 100 : -1 / 100;

      const { position } = this.planeGroup;

      switch (hoveredPlaneIndex) {
        case 0:
          position.z = Math.min(1, Math.max(-1, position.z + step));
          break;
        case 1:
          position.x = Math.min(1, Math.max(-1, position.x + step));
          break;
        case 2:
          position.y = Math.min(1, Math.max(-1, position.y + step));
          break;
        default:
          break;
      }

      this.planeGroup.updateMatrixWorld(true);

      this.scalePlaneParts();

      this.render();
    }
  };

  private scalePlaneParts = () => {
    this.planes.forEach((plane, index) => {
      const xAxis: "x" | "y" = ["x", "y", "x"][index] as "x" | "y";
      const yAxis: "y" | "z" = ["y", "z", "z"][index] as "y" | "z";

      const intersection = this.planeGroup.position;

      plane[0].scale.set(1 + intersection[xAxis], 1 + intersection[yAxis], 1);
      plane[1].scale.set(1 - intersection[xAxis], 1 + intersection[yAxis], 1);
      plane[2].scale.set(1 + intersection[xAxis], 1 - intersection[yAxis], 1);
      plane[3].scale.set(1 - intersection[xAxis], 1 - intersection[yAxis], 1);
    });
  };

  private forceRender = () => {
    this.renderDirty = false;

    this.renderer.render(this.scene, this.camera);
  };
}

export default TransparentPlanes;
