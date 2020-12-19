import * as THREE from "three";

import { Voxel } from "../types";

const createCamera = (
  canvas: HTMLCanvasElement,
  voxelCount: Voxel,
  voxelDimensions: Voxel,
) => {
  const camera = new THREE.PerspectiveCamera(
    60,
    canvas.width / canvas.height,
    1,
    600,
  );

  const scanSize = {
    x: voxelCount.x * voxelDimensions.x,
    y: voxelCount.y * voxelDimensions.y,
    z: voxelCount.z * voxelDimensions.z,
  };

  camera.position.set(
    -0.25 * scanSize.x,
    1.25 * scanSize.z,
    -1.25 * scanSize.y,
  );
  camera.lookAt(scanSize.x / 2, scanSize.z / 2, -scanSize.y / 2);

  return camera;
};

export default createCamera;
