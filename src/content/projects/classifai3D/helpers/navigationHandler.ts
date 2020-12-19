import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

import Classifai3D from "..";
import { voxelCount, voxelDimensions } from "../staticScan";
import { IDisposable, ViewType } from "../types";
import { getIntersectionsFromMouseEvent } from "../utils/picking";
import SpriteHandler from "./spriteHandler";

export default class NavigationHandler implements IDisposable {
  private camera: THREE.PerspectiveCamera;

  private direction = new THREE.Vector3();

  private lastMouseEvent?: MouseEvent;

  private speed = 2;

  private pointerControls: PointerLockControls;
  private orbitControls: OrbitControls;

  constructor(
    private renderer: Classifai3D,
    private canvas: HTMLCanvasElement,
    private spriteHandler: SpriteHandler,
  ) {
    this.camera = renderer.camera;

    this.pointerControls = new PointerLockControls(
      this.camera,
      this.canvas.parentElement!,
    );
    this.orbitControls = new OrbitControls(
      renderer.camera,
      canvas.parentElement!,
    );
    this.orbitControls.enableZoom = false;
    this.orbitControls.enablePan = false;
    this.orbitControls.enableKeys = false;

    document.addEventListener("mousemove", this.saveMouseEvent);
    this.pointerControls.addEventListener("change", this.renderer.render);
    this.orbitControls.addEventListener("change", this.renderer.render);
    this.orbitControls.addEventListener(
      "change",
      this.spriteHandler.updateRenderOrder,
    );

    this.spriteHandler.updateRenderOrder();
  }

  public dispose = () => {
    document.removeEventListener("mousemove", this.saveMouseEvent);
    this.pointerControls.removeEventListener("change", this.renderer.render);
    this.pointerControls.disconnect();
    this.pointerControls.dispose();
    if (this.renderer.pointerLocked) this.togglePointerLock();
  };

  public updateOrbitTarget = () => {
    const scanSize = {
      x: voxelCount.x * voxelDimensions.x,
      y: voxelCount.y * voxelDimensions.y,
      z: voxelCount.z * voxelDimensions.z,
    };
    this.orbitControls.target = new THREE.Vector3(
      scanSize.x / 2,
      scanSize.z / 2,
      -scanSize.y / 2,
    );
  };

  public setSpeed = (speed: number) => {
    this.speed = speed;
  };

  private saveMouseEvent = (event: MouseEvent) => {
    this.lastMouseEvent = event;
  };

  private get isPointerLocked() {
    return this.pointerControls.isLocked;
  }

  public moveForward = () => {
    this.camera.getWorldDirection(this.direction);
    this.camera.position.addScaledVector(this.direction, this.speed);

    this.spriteHandler.updateRenderOrder();
  };

  public moveBack = () => {
    this.camera.getWorldDirection(this.direction);
    this.camera.position.addScaledVector(this.direction, -this.speed);

    this.spriteHandler.updateRenderOrder();
  };

  public moveUp = () => {
    if (!this.isPointerLocked) return;
    this.camera.position.addScaledVector(this.camera.up, this.speed);

    this.spriteHandler.updateRenderOrder();
  };

  public moveDown = () => {
    if (!this.isPointerLocked) return;
    this.camera.position.addScaledVector(this.camera.up, -this.speed);

    this.spriteHandler.updateRenderOrder();
  };

  public moveLeft = () => {
    if (!this.isPointerLocked) return;
    this.pointerControls.moveRight(-this.speed);

    this.spriteHandler.updateRenderOrder();
  };

  public moveRight = () => {
    if (!this.isPointerLocked) return;
    this.pointerControls.moveRight(this.speed);

    this.spriteHandler.updateRenderOrder();
  };

  public togglePointerLock = () => {
    if (this.renderer.pointerLocked) {
      this.pointerControls.unlock();
      this.orbitControls.enabled = true;
    } else {
      this.pointerControls.lock();
      this.orbitControls.enabled = false;
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
