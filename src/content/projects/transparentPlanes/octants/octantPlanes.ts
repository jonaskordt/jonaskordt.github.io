import * as THREE from "three";

const getOctantPlanes = (octantId: number, planes: THREE.Mesh[][]) => {
  switch (octantId) {
    case 0:
      return [planes[0][0], planes[1][0], planes[2][0]];
    case 1:
      return [planes[0][1], planes[1][0], planes[2][1]];
    case 2:
      return [planes[0][2], planes[1][1], planes[2][0]];
    case 3:
      return [planes[0][3], planes[1][1], planes[2][1]];
    case 4:
      return [planes[0][0], planes[1][2], planes[2][2]];
    case 5:
      return [planes[0][1], planes[1][2], planes[2][3]];
    case 6:
      return [planes[0][2], planes[1][3], planes[2][2]];
    case 7:
      return [planes[0][3], planes[1][3], planes[2][3]];
    default:
      return [];
  }
};

export default getOctantPlanes;
