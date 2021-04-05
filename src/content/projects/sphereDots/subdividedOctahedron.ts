import * as THREE from "three";

import { SubdividedTriangle } from "./subdividedTriangle";

export class SubdividedOctahedron {
  private vertecies = [
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(0, -1, 0),
    new THREE.Vector3(0, 0, -1),
    new THREE.Vector3(-1, 0, 0),
  ];

  private faces: SubdividedTriangle[] = [];

  constructor() {
    this.faces.push(
      new SubdividedTriangle([
        this.vertecies[0],
        this.vertecies[1],
        this.vertecies[2],
      ]),
      new SubdividedTriangle([
        this.vertecies[0],
        this.vertecies[2],
        this.vertecies[3],
      ]),
      new SubdividedTriangle([
        this.vertecies[0],
        this.vertecies[3],
        this.vertecies[4],
      ]),
      new SubdividedTriangle([
        this.vertecies[0],
        this.vertecies[4],
        this.vertecies[1],
      ]),
      new SubdividedTriangle([
        this.vertecies[5],
        this.vertecies[1],
        this.vertecies[2],
      ]),
      new SubdividedTriangle([
        this.vertecies[5],
        this.vertecies[2],
        this.vertecies[3],
      ]),
      new SubdividedTriangle([
        this.vertecies[5],
        this.vertecies[3],
        this.vertecies[4],
      ]),
      new SubdividedTriangle([
        this.vertecies[5],
        this.vertecies[4],
        this.vertecies[1],
      ]),
    );
  }

  public getSubdivisionPoint(id: number) {
    const faceId = id % 8;
    return this.faces[faceId].getSubdivisionPoint(Math.floor(id / 8));
  }
}

export default SubdividedOctahedron;
