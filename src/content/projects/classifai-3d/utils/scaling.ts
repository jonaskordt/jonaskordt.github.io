import * as THREE from "three";

export const resizeRenderer = (
  renderer: THREE.WebGLRenderer,
  forceRender?: () => void,
) => {
  if (renderer.domElement.parentElement) {
    renderer.setSize(
      renderer.domElement.parentElement.clientWidth,
      renderer.domElement.parentElement.clientHeight,
    );
  }
  if (forceRender) forceRender();
};
