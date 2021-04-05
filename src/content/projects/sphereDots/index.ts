import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import CanvasController from "../default";
import sphereDotsControls from "./sphereDots.controls";
import { SubdividedOctahedron } from "./subdividedOctahedron";

class SphereDots extends CanvasController {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;

  private cameraControls: OrbitControls;

  private geometry = new THREE.BufferGeometry();
  private oct = new SubdividedOctahedron();

  private renderDirty = true;

  constructor(canvas: HTMLCanvasElement, updateUI: () => void) {
    super(canvas, updateUI);

    this.controls = sphereDotsControls(this);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.camera = new THREE.PerspectiveCamera(
      30,
      canvas.width / canvas.height,
      0.01,
      1000,
    );
    this.camera.position.set(1.5, 2.5, 3);
    this.camera.lookAt(0, 0, 0);

    this.cameraControls = new OrbitControls(this.camera, this.canvas);
    this.cameraControls.addEventListener("change", this.render);

    const material = new THREE.PointsMaterial({
      color: "darkred",
      size: 0.02,
    });
    this.scene.add(new THREE.Points(this.geometry, material));

    this.setPointAmount(2048);

    this.renderer.setAnimationLoop(this.animate);
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
    if (this.renderDirty) {
      this.forceRender();
    }
  };

  private render = () => {
    this.renderDirty = true;
  };

  private forceRender = () => {
    this.renderDirty = false;

    this.renderer.render(this.scene, this.camera);
  };

  public setPointAmount = (amount: number) => {
    const vertices: number[] = [];

    for (let i = 0; i < amount; i++) {
      const point = this.oct.getSubdivisionPoint(i);

      vertices.push(point.x, point.y, point.z);
    }

    this.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3),
    );

    this.render();
  };
}

export default SphereDots;
