import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { scanSize } from "../staticScan";

const createOrbitControls = (
  camera: THREE.Camera,
  canvas: HTMLCanvasElement,
) => {
  const controls = new OrbitControls(camera, canvas.parentElement!);
  controls.enableKeys = false;

  controls.target = new THREE.Vector3(
    scanSize.x / 2,
    scanSize.z / 2,
    -scanSize.y / 2,
  );

  return controls;
};

export default createOrbitControls;
