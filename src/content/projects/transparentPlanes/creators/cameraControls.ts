import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const createCameraControls: (
  camera: THREE.Camera,
  canvas: HTMLCanvasElement,
  render: () => void,
) => OrbitControls = (
  camera: THREE.Camera,
  canvas: HTMLCanvasElement,
  render: () => void,
) => {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.addEventListener("change", render);

  return controls;
};

export default createCameraControls;
