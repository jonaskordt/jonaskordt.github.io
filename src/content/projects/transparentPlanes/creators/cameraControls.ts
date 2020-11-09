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
  // Attach the event listeners of the controls to the parent element of the canvas.
  // This way other event handlers attached to the canvas itself can overwrite
  // the orbit controls when they need to trigger other controls.
  const controls = new OrbitControls(camera, canvas.parentElement!);

  controls.enableDamping = true;
  controls.enablePan = false;

  controls.addEventListener("change", render);

  return controls;
};

export default createCameraControls;
