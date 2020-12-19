import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { voxelCount, voxelDimensions } from "../staticScan";

const createOrbitControls = (
  camera: THREE.Camera,
  canvas: HTMLCanvasElement,
) => {
  const controls = new OrbitControls(camera, canvas.parentElement!);
  controls.enableKeys = false;

  const scanSize = {
    x: voxelCount.x * voxelDimensions.x,
    y: voxelCount.y * voxelDimensions.y,
    z: voxelCount.z * voxelDimensions.z,
  };
  controls.target = new THREE.Vector3(
    scanSize.x / 2,
    scanSize.z / 2,
    -scanSize.y / 2,
  );

  return controls;
};

export default createOrbitControls;
