import * as THREE from "three";

import { getIntersectionsFromPointer } from "../interaction";

export const moveIntersectionPoint = (
  deltaY: number,
  mouseEvent: MouseEvent,
  planes: THREE.Mesh[][],
  canvas: HTMLCanvasElement,
  camera: THREE.PerspectiveCamera,
  planeGroup: THREE.Group,
) => {
  const lastPointerPosition = {
    x: mouseEvent.x,
    y: mouseEvent.y,
  };
  const intersections = getIntersectionsFromPointer(
    lastPointerPosition,
    planes.flat(),
    canvas,
    camera,
  );

  if (!intersections.length) return false;

  const hoveredPlaneIndex = intersections[0].object.userData.index as number;

  const step = deltaY > 0 ? 1 / 100 : -1 / 100;

  const { position } = planeGroup;

  switch (hoveredPlaneIndex) {
    case 0:
      position.z = Math.min(1, Math.max(-1, position.z + step));
      break;
    case 1:
      position.x = Math.min(1, Math.max(-1, position.x + step));
      break;
    case 2:
      position.y = Math.min(1, Math.max(-1, position.y + step));
      break;
    default:
      break;
  }

  planeGroup.updateMatrixWorld(true);

  return true;
};

export const scalePlaneParts = (
  planeGroup: THREE.Group,
  planes: THREE.Mesh[][],
) => {
  const intersection = planeGroup.position;

  planes.forEach((plane, index) => {
    // Get the axes of the scene colinear with the x and y axes of the plane.

    const xAxis: "x" | "y" = ["x", "y", "x"][index] as "x" | "y";
    const yAxis: "y" | "z" = ["y", "z", "z"][index] as "y" | "z";

    // Scale the plane parts to the correct size.

    plane[0].scale.set(1 + intersection[xAxis], 1 + intersection[yAxis], 1);
    plane[1].scale.set(1 - intersection[xAxis], 1 + intersection[yAxis], 1);
    plane[2].scale.set(1 + intersection[xAxis], 1 - intersection[yAxis], 1);
    plane[3].scale.set(1 - intersection[xAxis], 1 - intersection[yAxis], 1);

    // Set the correct uv coordinates.

    const geometryUVs = plane.map(
      (planePart) =>
        (planePart.geometry as THREE.BufferGeometry).getAttribute(
          "uv",
        ) as THREE.BufferAttribute,
    );

    // Width and height of plane quadrant 0.
    // See split plane creation for quadrant locations.
    const width0 = (1 + intersection[xAxis]) / 2;
    const height0 = (1 + intersection[yAxis]) / 2;

    geometryUVs[0].setY(0, height0);
    geometryUVs[0].setXY(1, width0, height0);
    geometryUVs[0].setX(3, width0);
    geometryUVs[0].needsUpdate = true;

    geometryUVs[1].setXY(0, width0, height0);
    geometryUVs[1].setY(1, height0);
    geometryUVs[1].setX(2, width0);
    geometryUVs[1].needsUpdate = true;

    geometryUVs[2].setX(1, width0);
    geometryUVs[2].setY(2, height0);
    geometryUVs[2].setXY(3, width0, height0);
    geometryUVs[2].needsUpdate = true;

    geometryUVs[3].setX(0, width0);
    geometryUVs[3].setXY(2, width0, height0);
    geometryUVs[3].setY(3, height0);
    geometryUVs[3].needsUpdate = true;
  });
};
