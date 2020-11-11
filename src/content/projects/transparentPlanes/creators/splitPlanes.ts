import * as THREE from "three";

const applyRotation = (planePart: THREE.Mesh, planeIndex: number) => {
  switch (planeIndex) {
    case 1:
      planePart.rotateX(Math.PI / 2);
      planePart.rotateY(Math.PI / 2);
      break;
    case 2:
      planePart.rotateX(Math.PI / 2);
      break;
    default:
      break;
  }
};

const createSplitPlanes: (materials: THREE.Material[]) => THREE.Mesh[][] = (
  materials: THREE.Material[],
) => {
  return materials.map((material, index) => {
    const geometries = [
      new THREE.PlaneBufferGeometry(),
      new THREE.PlaneBufferGeometry(),
      new THREE.PlaneBufferGeometry(),
      new THREE.PlaneBufferGeometry(),
    ];

    /*
     * Plane part positioning:
     * 2 | 3
     * --+--
     * 0 | 1
     */
    geometries[0].translate(-0.5, -0.5, 0);
    geometries[1].translate(0.5, -0.5, 0);
    geometries[2].translate(-0.5, 0.5, 0);
    geometries[3].translate(0.5, 0.5, 0);

    return geometries.map((geometry) => {
      const planePart = new THREE.Mesh(geometry, material);
      planePart.userData.index = index;

      applyRotation(planePart, index);

      return planePart;
    });
  });
};

export default createSplitPlanes;
