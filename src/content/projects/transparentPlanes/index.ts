import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import CanvasController from "../default";
import transparentPlanesControls from "./transparentPlanes.controls";

class TransparentPlanes extends CanvasController {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;

  private materials: THREE.MeshBasicMaterial[];
  private planes: THREE.Mesh[];

  private cameraControls: OrbitControls;
  private updateCameraControls = true;

  private renderDirty = true;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.controls = transparentPlanesControls(this);

    this.renderer = new THREE.WebGLRenderer({ alpha: true, canvas });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.camera = new THREE.PerspectiveCamera(
      60,
      canvas.width / canvas.height,
      0.01,
      1000,
    );
    this.camera.position.set(3, 3, 3);
    this.camera.lookAt(0, 0, 0);

    this.materials = ["red", "green", "blue"].map((cString) => {
      const color = new THREE.Color(cString);
      return new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.5,
      });
    });

    // Split Sprites
    this.planes = this.materials.map((material) => {
      const geometry = new THREE.PlaneBufferGeometry(1, 1);
      return new THREE.Mesh(geometry, material);
    });
    this.planes[1].translateX(1);
    this.planes[2].translateX(2);
    this.scene.add(...this.planes);

    this.cameraControls = new OrbitControls(this.camera, this.canvas);
    this.cameraControls.enableDamping = true;
    this.cameraControls.enablePan = false;
    this.cameraControls.addEventListener("change", this.render);

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
