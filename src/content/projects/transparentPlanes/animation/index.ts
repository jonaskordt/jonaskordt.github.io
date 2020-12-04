import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const animate = (
  animationCallback: () => void,
  cameraControls: OrbitControls,
  renderDirty: boolean,
  forceRender: () => void,
) => {
  window.requestAnimationFrame(animationCallback);

  cameraControls.update();

  if (renderDirty) forceRender();
};

export const forceRender = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
) => {
  renderer.render(scene, camera);
};
