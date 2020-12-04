import * as THREE from "three";

export const updateOpacity = (
  opacity: number,
  materials: THREE.Material[][],
) => {
  materials.flat().forEach((material) => material.setValues({ opacity }));
};

export const updateDefaultOpacity = (
  state: boolean,
  planes: THREE.Mesh[][],
  updateRenderOrder: (state?: boolean) => void,
) => {
  if (state) {
    planes.flat().forEach((planePart) => {
      // eslint-disable-next-line no-param-reassign
      planePart.renderOrder = 0;
    });
  } else {
    updateRenderOrder(true);
  }
};

export const updatePlaneSeparation = (
  state: boolean,
  planes: THREE.Mesh[][],
) => {
  if (state) {
    const dist = 0.3;

    planes[0][0].position.set(-dist, -dist, 0);
    planes[0][1].position.set(dist, -dist, 0);
    planes[0][2].position.set(-dist, dist, 0);
    planes[0][3].position.set(dist, dist, 0);
    planes[1][0].position.set(0, -dist, -dist);
    planes[1][1].position.set(0, dist, -dist);
    planes[1][2].position.set(0, -dist, dist);
    planes[1][3].position.set(0, dist, dist);
    planes[2][0].position.set(-dist, 0, -dist);
    planes[2][1].position.set(dist, 0, -dist);
    planes[2][2].position.set(-dist, 0, dist);
    planes[2][3].position.set(dist, 0, dist);
  } else {
    planes.flat().forEach((planePart) => {
      planePart.position.set(0, 0, 0);
    });
  }
};

export const updateTextureState = (
  state: boolean,
  planes: THREE.Mesh[][],
  materials: THREE.Material[][],
) => {
  const materialIndex = state ? 0 : 1;

  planes.forEach((plane, index) => {
    plane.forEach((planePart) => {
      // eslint-disable-next-line no-param-reassign
      planePart.material = materials[index][materialIndex];
    });
  });
};
