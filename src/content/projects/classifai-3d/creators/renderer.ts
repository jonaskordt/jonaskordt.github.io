import * as THREE from "three";

export const createRenderer = (canvas: HTMLCanvasElement) => {
  const renderer = new THREE.WebGLRenderer({ alpha: true, canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.xr.enabled = true;
  return renderer;
};
