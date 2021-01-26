import * as THREE from "three";

import { Voxel } from "../types";

const createCamera = (canvas: HTMLCanvasElement, scanSize: Voxel) => {
  const camera = new THREE.PerspectiveCamera(
    60,
    canvas.width / canvas.height,
    0.0001,
    6,
  );

  camera.position.set(
    -0.25 * scanSize.x,
    1.25 * scanSize.z,
    -1.25 * scanSize.y,
  );
  camera.lookAt(scanSize.x / 2, scanSize.z / 2, -scanSize.y / 2);

  return camera;
};

export default createCamera;
