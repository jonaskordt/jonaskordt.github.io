import * as THREE from "three";

export const createCamera: (
  canvas: HTMLCanvasElement,
) => THREE.PerspectiveCamera = (canvas: HTMLCanvasElement) => {
  const camera = new THREE.PerspectiveCamera(
    30,
    canvas.width / canvas.height,
    0.01,
    1000,
  );

  camera.position.set(3, 3, 3);
  camera.lookAt(0, 0, 0);

  return camera;
};
