import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const createCameraControls = (
  camera: THREE.Camera,
  canvas: HTMLCanvasElement,
  onChange: () => void,
) => {
  // Attach the event listeners of the controls to the parent element of the canvas.
  // This way other event handlers attached to the canvas itself can overwrite
  // the orbit controls when they need to trigger other controls.
  const controls = new OrbitControls(camera, canvas.parentElement!);

  controls.enableDamping = true;
  controls.enablePan = false;

  controls.addEventListener("change", onChange);

  return controls;
};
