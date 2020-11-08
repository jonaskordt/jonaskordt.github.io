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
import transparentPlanesControls from "./transparentPlanes.controls";

class TransparentPlanes extends CanvasController {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;

  private materials: THREE.MeshBasicMaterial[];
  private planes: THREE.Mesh[][];

  private cameraControls: OrbitControls;
  private updateCameraControls = true;

  private renderDirty = true;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.controls = transparentPlanesControls(this);

    this.renderer = createRenderer(canvas);
    this.camera = createCamera(canvas);

    this.materials = createMaterials();

    this.planes = createSplitPlanes(this.materials);
    this.scene.add(...this.planes.flat());

    // Event listeners for moving the planes

    this.cameraControls = createCameraControls(
      this.camera,
      this.canvas,
      this.render,
    );

    this.animate();
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

  private forceRender = () => {
    this.renderDirty = false;

    this.renderer.render(this.scene, this.camera);
  };
}

export default TransparentPlanes;
