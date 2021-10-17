import * as THREE from "three";

import { blueTexture, greenTexture, redTexture } from "../textures";

export const createMaterials = (onLoad: () => void) => {
  const textureLoader = new THREE.TextureLoader();

  const colors = ["red", "green", "blue"];

  const commonSpec = {
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,
  };

  return [redTexture, greenTexture, blueTexture].map((textureURL, index) => {
    const texture = textureLoader.load(textureURL, onLoad);

    return [
      new THREE.MeshBasicMaterial({
        map: texture,
        ...commonSpec,
      }),
      new THREE.MeshBasicMaterial({
        color: colors[index],
        ...commonSpec,
      }),
    ];
  });
};
