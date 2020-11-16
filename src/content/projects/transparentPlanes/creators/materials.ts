import * as THREE from "three";

import blueTexture from "../textures/blue.png";
import greenTexture from "../textures/green.png";
import redTexture from "../textures/red.png";

const createMaterials = (onLoad: () => void) => {
  const textureLoader = new THREE.TextureLoader();

  return [redTexture, greenTexture, blueTexture].map((textureURL) => {
    const texture = textureLoader.load(textureURL, onLoad);

    return new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide,
    });
  });
};

export default createMaterials;
