import * as THREE from "three";

import { scanSize } from "../staticScan";

export const createMeshes = (geometries: THREE.BufferGeometry[]) => {
  const material = new THREE.MeshPhongMaterial({
    color: "red",
    side: THREE.DoubleSide,
  });
  return geometries.map((geometry, index) => {
    const meshMaterial = material.clone();

    const mesh = new THREE.Mesh(geometry, meshMaterial);
    mesh.userData.index = index;
    return mesh;
  });
};

export const getMaterials = (meshes: THREE.Mesh[]) =>
  meshes.map((mesh) => mesh.material as THREE.MeshPhongMaterial);

export const createMeshGroup = () => {
  const meshGroup = new THREE.Group();
  meshGroup.rotateX(Math.PI / -2);
  meshGroup.rotateZ(Math.PI);
  meshGroup.translateX(-scanSize.x / 2);
  meshGroup.translateY(-scanSize.y / 2);
  meshGroup.translateZ(-scanSize.z / 2);
  meshGroup.updateMatrix();
  meshGroup.updateMatrixWorld();
  return meshGroup;
};
