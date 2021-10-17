import * as THREE from "three";

export class RotatingMesh extends THREE.Mesh {
  private lastTime?: number;

  public tick = (time: number) => {
    if (!this.lastTime) {
      this.lastTime = time;
      return;
    }

    const delta = this.lastTime - time;
    this.lastTime = time;

    this.rotation.y -= delta * 0.001;
  };
}
