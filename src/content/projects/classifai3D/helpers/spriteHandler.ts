import * as THREE from "three";

import Classifai3D from "..";
import fragmentShader from "../shader/fragmentShader";
import vertexShader from "../shader/vertexShader";
import { atlasGrid, voxelCount, voxelDimensions } from "../staticScan";
import atlas from "../staticScan/brain-texture-atlas.png";
import { SpriteUniforms, ViewType, viewTypes, Voxel } from "../types";
import { getPlaneAxes } from "../utils/conversion";
import getSplitPlane from "../utils/splitPlane";
import { getCameraOctant, getOctantPlanes } from "../utils/transparency";

export default class SpriteHandler {
  private sprites: THREE.Mesh[][];
  public spriteGroup: THREE.Group;

  private uniforms: SpriteUniforms;

  private materials: THREE.ShaderMaterial[];

  private cameraOctant?: number;
  private cameraPosition = new THREE.Vector3();

  constructor(private renderer: Classifai3D) {
    const loader = new THREE.TextureLoader();
    const scanTexture = loader.load(atlas, () => {
      renderer.render();
    });
    scanTexture.magFilter = THREE.NearestFilter;
    scanTexture.minFilter = THREE.NearestFilter;

    this.uniforms = {
      activeSlices: {
        value: [
          renderer.selectedVoxel.x,
          renderer.selectedVoxel.y,
          renderer.selectedVoxel.z,
        ],
      },
      scanSize: {
        value: [voxelCount.x, voxelCount.y, voxelCount.z],
      },
      sliceCountU: { value: atlasGrid.x },
      sliceCountV: { value: atlasGrid.y },
      scanBackground: { value: 0 },
      dataTexture: {
        type: "t",
        value: scanTexture,
      },
      contrast: { value: 1 },
      brightness: { value: 1 },
      blueTint: { value: true },
      opacity: { value: 0.5 },
    };

    this.materials = viewTypes.map((viewType) => {
      return new THREE.ShaderMaterial({
        fragmentShader: fragmentShader(viewType),
        transparent: true,
        vertexShader,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
        uniforms: this.uniforms as any,
        side: THREE.DoubleSide,
      });
    });

    this.sprites = viewTypes.map((viewType) => {
      const axes = getPlaneAxes(viewType);
      const width = voxelCount[axes[0]];
      const height = voxelCount[axes[1]];

      const sprite = getSplitPlane(this.materials[viewType]);
      sprite.forEach((spritePart) => {
        spritePart.scale.set(width / 2, height / 2, 1);

        // eslint-disable-next-line no-param-reassign
        spritePart.userData.viewType = viewType;

        if (viewType === ViewType.Sagittal) {
          spritePart.rotateX(Math.PI / 2);
          spritePart.rotateY(-Math.PI / 2);
        } else if (viewType === ViewType.Coronal) {
          spritePart.rotateX(Math.PI / 2);
        }
      });

      return sprite;
    });

    this.spriteGroup = new THREE.Group();
    this.spriteGroup.add(...this.spriteParts);

    this.setSelectedVoxel(renderer.selectedVoxel);
  }

  public get spriteParts() {
    return this.sprites.flat();
  }

  public setOpacity = (opacity: number) => {
    this.materials.forEach((material) => {
      // eslint-disable-next-line no-param-reassign
      material.uniforms.opacity.value = opacity;
    });

    this.renderer.render();
  };

  public setContrast = (contrast: number) => {
    this.materials.forEach((material) => {
      // eslint-disable-next-line no-param-reassign
      material.uniforms.contrast.value = contrast;
    });

    this.renderer.render();
  };

  public setBrightness = (brightness: number) => {
    this.materials.forEach((material) => {
      // eslint-disable-next-line no-param-reassign
      material.uniforms.brightness.value = brightness;
    });

    this.renderer.render();
  };

  public setSelectedVoxel = (voxel: Voxel) => {
    this.materials.forEach((material) => {
      // eslint-disable-next-line no-param-reassign
      ((material.uniforms as unknown) as SpriteUniforms).activeSlices.value[0] =
        voxel.x;
      // eslint-disable-next-line no-param-reassign
      ((material.uniforms as unknown) as SpriteUniforms).activeSlices.value[1] =
        voxel.y;
      // eslint-disable-next-line no-param-reassign
      ((material.uniforms as unknown) as SpriteUniforms).activeSlices.value[2] =
        voxel.z;
    });

    viewTypes.forEach((viewType) => {
      this.scaleSprite(viewType);
    });
  };

  public setCameraPosition = (position: THREE.Vector3) => {
    this.cameraPosition.copy(position);

    this.updateRenderOrder();
  };

  public updateRenderOrder = () => {
    const scanSizeX = voxelCount.x * voxelDimensions.x;
    this.spriteGroup.position.set(
      // x axis of texture atlas is inverted ...
      scanSizeX - this.renderer.selectedVoxel.x - 1,
      this.renderer.selectedVoxel.y,
      this.renderer.selectedVoxel.z,
    );

    this.spriteGroup.updateMatrixWorld(true);

    const cameraPosition = this.spriteGroup.worldToLocal(
      new THREE.Vector3(
        this.cameraPosition.x,
        this.cameraPosition.y,
        this.cameraPosition.z,
      ),
    );

    const cameraOctant = getCameraOctant(cameraPosition);

    if (cameraOctant === this.cameraOctant) return this.renderer.render();

    this.cameraOctant = cameraOctant;

    const renderOrder0 = 7 - cameraOctant;
    const renderOrder2 = cameraOctant;

    this.spriteParts.forEach((spritePart) => {
      // eslint-disable-next-line no-param-reassign
      spritePart.renderOrder = 1;
    });

    getOctantPlanes(renderOrder0, this.sprites)?.forEach((spritePart) => {
      // eslint-disable-next-line no-param-reassign
      spritePart.renderOrder = 0;
    });
    getOctantPlanes(renderOrder2, this.sprites)?.forEach((spritePart) => {
      // eslint-disable-next-line no-param-reassign
      spritePart.renderOrder = 2;
    });

    return this.renderer.render();
  };

  private scaleSprite = (viewType: ViewType) => {
    const { selectedVoxel } = this.renderer;

    const sprite = this.sprites[viewType];

    const planeAxes = getPlaneAxes(viewType);
    const xAxis = planeAxes[0];
    const yAxis = planeAxes[1];

    sprite[0].scale.set(
      voxelCount[xAxis] - selectedVoxel[xAxis] - 0.5,
      selectedVoxel[yAxis] + 0.5,
      1,
    );
    sprite[1].scale.set(
      selectedVoxel[xAxis] + 0.5,
      selectedVoxel[yAxis] + 0.5,
      1,
    );
    sprite[2].scale.set(
      voxelCount[xAxis] - selectedVoxel[xAxis] - 0.5,
      voxelCount[yAxis] - selectedVoxel[yAxis] - 0.5,
      1,
    );
    sprite[3].scale.set(
      selectedVoxel[xAxis] + 0.5,
      voxelCount[yAxis] - selectedVoxel[yAxis] - 0.5,
      1,
    );

    const geometryUVs = sprite.map(
      (spritePart) =>
        (spritePart.geometry as THREE.BufferGeometry).getAttribute(
          "uv",
        ) as THREE.BufferAttribute,
    );

    const width0 =
      (voxelCount[xAxis] - selectedVoxel[xAxis] - 0.5) / voxelCount[xAxis];
    const height0 = (selectedVoxel[yAxis] + 0.5) / voxelCount[yAxis];
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
  };
}
