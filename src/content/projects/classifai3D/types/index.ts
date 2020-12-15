import * as THREE from "three";

export interface Pixel {
  x: number;
  y: number;
}

export interface Voxel extends Pixel {
  z: number;
}

export enum ViewType {
  Transverse = 0,
  Sagittal = 1,
  Coronal = 2,
}

export const viewTypes = [
  ViewType.Transverse,
  ViewType.Sagittal,
  ViewType.Coronal,
];

export interface IDisposable {
  dispose: () => void;
}

export interface SpriteUniforms {
  activeSlices: {
    value: [number, number, number];
  };
  scanSize: {
    value: [number, number, number];
  };
  sliceCountU: {
    value: number;
  };
  sliceCountV: {
    value: number;
  };
  scanBackground: {
    value: number;
  };
  dataTexture: {
    type: "t";
    value: THREE.Texture;
  };
  contrast: {
    value: number;
  };
  brightness: {
    value: number;
  };
  blueTint: {
    value: boolean;
  };
  opacity: {
    value: number;
  };
}
