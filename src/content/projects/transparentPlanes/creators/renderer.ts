import * as THREE from "three";

const createRenderer: (canvas: HTMLCanvasElement) => THREE.WebGLRenderer = (
  canvas: HTMLCanvasElement,
) => {
  const renderer = new THREE.WebGLRenderer({ alpha: true, canvas });
  renderer.setPixelRatio(window.devicePixelRatio);
  return renderer;
};

export default createRenderer;
