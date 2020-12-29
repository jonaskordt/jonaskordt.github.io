import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import CanvasController from "../default";
import animationControls from "./animation.controls";
import cubeMap from "./cubeMap";
import RotatingMesh from "./rotatingMesh";

class Animation extends CanvasController {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;

  private cameraControls: OrbitControls;

  private toruses: RotatingMesh[] = [];

  private animationStartTime = 0;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);

    this.controls = animationControls;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.scene.background = new THREE.CubeTextureLoader().load(
      cubeMap,
      this.startAnimation,
    );

    this.camera = new THREE.PerspectiveCamera(
      30,
      canvas.width / canvas.height,
      0.01,
      1000,
    );
    this.camera.position.set(-8, 0, 100);
    this.camera.lookAt(0, 0, 0);

    this.cameraControls = new OrbitControls(this.camera, this.canvas);

    const torusGeometry = new THREE.TorusBufferGeometry(10, 1, 50, 100);
    const phongMaterial = new THREE.MeshPhongMaterial({
      color: "#ffcc33",
      shininess: 95,
      emissive: "#886633",
      specular: "#aaaaaa",
      reflectivity: 0.9,
      envMap: this.scene.background,
    });

    for (let i = 0; i < 11; i++) {
      const torus = new RotatingMesh(torusGeometry, phongMaterial);

      torus.position.setZ(10 * (i - 5));

      this.toruses.push(torus);
    }
    this.scene.add(...this.toruses);

    this.scene.add(new THREE.AmbientLight("white", 0.1));

    let spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(2, 17, 84);
    this.scene.add(spotLight);
    spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(-74, 17, -41);
    this.scene.add(spotLight);
    spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(74, 17, -41);
    this.scene.add(spotLight);
  }

  protected resizeCanvas(): void {
    const parent = this.canvas.parentElement;
    if (!parent) return;

    this.renderer.setSize(parent.clientWidth, parent.clientHeight);
    this.camera.aspect = this.canvas.width / this.canvas.height;
    this.camera.updateProjectionMatrix();
    this.render();
  }

  private startAnimation = () => {
    this.render();
    this.animationStartTime = performance.now();
    this.renderer.setAnimationLoop(this.animate);
  };

  private animate = () => {
    const time = performance.now();
    const startDelta = time - this.animationStartTime;

    this.toruses.forEach((torus, index) => {
      if (index <= startDelta / 100) torus.tick(time);
    });
    this.render();
  };

  private render = () => {
    this.renderer.render(this.scene, this.camera);
  };
}

export default Animation;
