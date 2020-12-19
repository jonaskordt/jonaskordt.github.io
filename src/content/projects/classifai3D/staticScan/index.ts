import * as THREE from "three";

import { Pixel, Voxel } from "../types";
import preGeneratedGeometries from "./preGeneratedGeometries";

export const voxelCount: Voxel = {
  x: 170,
  y: 244,
  z: 216,
};

export const voxelDimensions: Voxel = {
  x: 0.9999985694885254,
  y: 1,
  z: 1,
};

export const atlasGrid: Pixel = {
  x: 18,
  y: 12,
};

export const getConnectedStructureGeometries: () => Promise<
  THREE.BufferGeometry
>[] = () => {
  const geometryLoader = new THREE.BufferGeometryLoader();

  return Array.from({ length: preGeneratedGeometries.length }, (_, i) => i).map(
    (geometryIndex) => {
      return new Promise<THREE.BufferGeometry>((resolve) => {
        geometryLoader.load(
          preGeneratedGeometries[geometryIndex],
          (geometry) => {
            resolve(geometry);
          },
          () => {},
          () => {
            resolve(new THREE.BufferGeometry());
          },
        );
      });
    },
  );
};
