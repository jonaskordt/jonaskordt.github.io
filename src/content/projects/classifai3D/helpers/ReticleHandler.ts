import * as THREE from "three";

import createReticle from "../creators/reticle";

export default class ReticleHandler {
  private reticle: THREE.Mesh;

  private hitTestSourceRequested = false;
  private hitTestSource: THREE.XRHitTestSource | null = null;

  private active = false;

  constructor(private renderer: THREE.WebGLRenderer, scene: THREE.Scene) {
    this.reticle = createReticle();
    this.reticle.visible = false;

    scene.add(this.reticle);
  }

  public get reticleMatrix() {
    return this.reticle.matrix;
  }

  public get reticleActive() {
    return this.reticle.visible;
  }

  public activate = () => {
    this.active = true;
  };

  public update = (frame: THREE.XRFrame) => {
    if (!this.active) return;

    if (!this.hitTestSourceRequested) {
      const session = this.renderer.xr.getSession();
      session
        .requestReferenceSpace("viewer")
        .then((referenceSpace) => {
          session
            .requestHitTestSource({ space: referenceSpace })
            .then((source) => {
              this.hitTestSource = source;
            })
            .catch(() => {});
        })
        .catch(() => {});

      session.addEventListener("end", () => {
        this.hitTestSourceRequested = false;
        this.hitTestSource = null;
      });

      this.hitTestSourceRequested = true;
    }

    if (this.hitTestSource) {
      const referenceSpace = this.renderer.xr.getReferenceSpace();
      const hitTestResults = frame.getHitTestResults(this.hitTestSource);

      if (hitTestResults.length) {
        const hit = hitTestResults[0];

        const pose = hit.getPose(referenceSpace);

        if (pose) {
          this.reticle.visible = true;
          this.reticle.matrix.fromArray(pose.transform.matrix);
        } else {
          this.reticle.visible = false;
        }
      } else {
        this.reticle.visible = false;
      }
    }
  };
}