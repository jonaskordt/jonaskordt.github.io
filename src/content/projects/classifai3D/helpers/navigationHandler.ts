import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

import Classifai3D from "..";
import { voxelCount } from "../staticScan";
import { IDisposable, ViewType } from "../types";
import { getIntersectionsFromMouseEvent } from "../utils/picking";
import SpriteHandler from "./spriteHandler";

export default class NavigationHandler implements IDisposable {
  private camera: THREE.PerspectiveCamera;

  private direction = new THREE.Vector3();

  private lastMouseEvent?: MouseEvent;

  private speed = 2;

  private controls: PointerLockControls;

  constructor(
    private renderer: Classifai3D,
    private canvas: HTMLCanvasElement,
    private spriteHandler: SpriteHandler,
  ) {
    this.camera = renderer.camera;

    this.controls = new PointerLockControls(
      this.camera,
      this.canvas.parentElement!,
    );

    document.addEventListener("mousemove", this.saveMouseEvent);
    this.controls.addEventListener("change", this.renderer.render);

    this.updateCameraPosition();
  }

  public dispose = () => {
    document.removeEventListener("mousemove", this.saveMouseEvent);
    this.controls.removeEventListener("change", this.renderer.render);
    this.controls.disconnect();
    this.controls.dispose();
    if (this.renderer.pointerLocked) this.togglePointerLock();
  };

  public setSpeed = (speed: number) => {
    this.speed = speed;
  };

  private saveMouseEvent = (event: MouseEvent) => {
    this.lastMouseEvent = event;
  };

  public moveForward = () => {
    this.camera.getWorldDirection(this.direction);
    this.camera.position.addScaledVector(this.direction, this.speed);

    this.updateCameraPosition();
  };

  public moveBack = () => {
    this.camera.getWorldDirection(this.direction);
    this.camera.position.addScaledVector(this.direction, -this.speed);

    this.updateCameraPosition();
  };

  public moveUp = () => {
    this.camera.position.addScaledVector(this.camera.up, this.speed);

    this.updateCameraPosition();
  };

  public moveDown = () => {
    this.camera.position.addScaledVector(this.camera.up, -this.speed);

    this.updateCameraPosition();
  };

  public moveLeft = () => {
    this.controls.moveRight(-this.speed);

    this.updateCameraPosition();
  };

  public moveRight = () => {
    this.controls.moveRight(this.speed);

    this.updateCameraPosition();
  };

  private updateCameraPosition = () => {
    this.spriteHandler.setCameraPosition(this.camera.position);
  };

  public togglePointerLock = () => {
    if (this.renderer.pointerLocked) {
      this.controls.unlock();
    } else {
      this.controls.lock();
    }
    this.renderer.togglePointerLock();
    this.renderer.render();
  };

  public increaseSpritePosition = () => {
    if (!this.lastMouseEvent) return;

    const intersections = getIntersectionsFromMouseEvent(
      this.lastMouseEvent,
      this.spriteHandler.spriteParts,
      this.canvas,
      this.renderer.camera,
      this.renderer.pointerLocked,
    );

    if (intersections.length) {
      const newSelectedVoxel = this.spriteHandler.selectedVoxel;

      const hoveredViewType = intersections[0].object.userData
        .viewType as ViewType;
      switch (hoveredViewType) {
        case ViewType.Transverse:
          newSelectedVoxel.z = Math.min(
            voxelCount.z - 1,
            this.spriteHandler.selectedVoxel.z + 1,
          );
          break;
        case ViewType.Sagittal:
          newSelectedVoxel.x = Math.min(
            voxelCount.x - 1,
            this.spriteHandler.selectedVoxel.x + 1,
          );
          break;
        case ViewType.Coronal:
          newSelectedVoxel.y = Math.min(
            voxelCount.y - 1,
            this.spriteHandler.selectedVoxel.y + 1,
          );
          break;
      }

      this.spriteHandler.setSelectedVoxel(newSelectedVoxel);
    }
  };

  public decreaseSpritePosition = () => {
    if (!this.lastMouseEvent) return;

    const intersections = getIntersectionsFromMouseEvent(
      this.lastMouseEvent,
      this.spriteHandler.spriteParts,
      this.canvas,
      this.renderer.camera,
      this.renderer.pointerLocked,
    );

    if (intersections.length) {
      const newSelectedVoxel = this.spriteHandler.selectedVoxel;

      const hoveredViewType = intersections[0].object.userData
        .viewType as ViewType;
      switch (hoveredViewType) {
        case ViewType.Transverse:
          newSelectedVoxel.z = Math.max(
            0,
            this.spriteHandler.selectedVoxel.z - 1,
          );
          break;
        case ViewType.Sagittal:
          newSelectedVoxel.x = Math.max(
            0,
            this.spriteHandler.selectedVoxel.x - 1,
          );
          break;
        case ViewType.Coronal:
          newSelectedVoxel.y = Math.max(
            0,
            this.spriteHandler.selectedVoxel.y - 1,
          );
          break;
      }

      this.spriteHandler.setSelectedVoxel(newSelectedVoxel);
    }
  };
}
