import * as THREE from "three";

const raycaster = new THREE.Raycaster();

export const convertPositionToWebGLPosition = (
  position: { x: number; y: number },
  boxDimensions: { width: number; height: number },
) => {
  return {
    x: (2 * position.x) / boxDimensions.width - 1,
    y: (-2 * position.y) / boxDimensions.height + 1,
  };
};

export const getIntersections = (
  webGLPosition: { x: number; y: number },
  objects: THREE.Object3D[],
  camera: THREE.PerspectiveCamera,
) => {
  raycaster.setFromCamera(webGLPosition, camera);
  return raycaster.intersectObjects(objects);
};

export const getIntersectionsFromPointer = (
  screenPosition: { x: number; y: number },
  objects: THREE.Object3D[],
  canvas: HTMLCanvasElement,
  camera: THREE.PerspectiveCamera,
) => {
  const canvasRect = canvas.getBoundingClientRect();
  if (
    screenPosition.x <= canvasRect.left ||
    screenPosition.x >= canvasRect.right ||
    screenPosition.y <= canvasRect.top ||
    screenPosition.y >= canvasRect.bottom
  )
    return [];

  const canvasPosition = {
    x: screenPosition.x - canvasRect.left,
    y: screenPosition.y - canvasRect.top,
  };
  const webGLPosition = convertPositionToWebGLPosition(
    canvasPosition,
    canvasRect,
  );

  return getIntersections(webGLPosition, objects, camera);
};
