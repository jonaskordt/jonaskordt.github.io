import * as THREE from "three";

// eslint-disable-next-line import/prefer-default-export
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
