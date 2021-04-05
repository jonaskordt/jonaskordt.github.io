import * as THREE from "three";

export class SubdividedTriangle {
  private subTriangles: SubdividedTriangle[] = [];
  private centerPoint: THREE.Vector3;

  constructor(private vertecies: THREE.Vector3[]) {
    this.centerPoint = vertecies[0]
      .clone()
      .add(vertecies[1])
      .add(vertecies[2])
      .divideScalar(3)
      .normalize();
  }

  public getSubdivisionPoint(id = 0): THREE.Vector3 {
    if (id === 0) {
      return this.centerPoint;
    }

    if (this.subTriangles.length < 4) {
      const lerp01 = this.vertecies[0]
        .clone()
        .lerp(this.vertecies[1], 0.5)
        .normalize();
      const lerp02 = this.vertecies[0]
        .clone()
        .lerp(this.vertecies[2], 0.5)
        .normalize();
      const lerp12 = this.vertecies[1]
        .clone()
        .lerp(this.vertecies[2], 0.5)
        .normalize();

      this.subTriangles.push(
        new SubdividedTriangle([lerp01, lerp02, lerp12]),
        new SubdividedTriangle([this.vertecies[0], lerp01, lerp02]),
        new SubdividedTriangle([this.vertecies[1], lerp01, lerp12]),
        new SubdividedTriangle([this.vertecies[2], lerp02, lerp12]),
      );
    }

    const subTriangleId = id % 4;
    return this.subTriangles[subTriangleId].getSubdivisionPoint(
      Math.floor(id / 4),
    );
  }
}

export default SubdividedTriangle;
