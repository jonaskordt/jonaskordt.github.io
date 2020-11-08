import * as THREE from "three";

const createMaterials: () => THREE.MeshBasicMaterial[] = () => {
  return ["red", "green", "blue"].map((cString) => {
    const color = new THREE.Color(cString);
    return new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
  });
};

export default createMaterials;
