import * as THREE from "three";

export const createRenderer: (
  canvas: HTMLCanvasElement,
) => THREE.WebGLRenderer = (canvas: HTMLCanvasElement) => {
  const renderer = new THREE.WebGLRenderer({ alpha: true, canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  return renderer;
};
