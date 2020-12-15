import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

import Classifai3D from "..";
import { voxelCount } from "../staticScan";
import { IDisposable, ViewType } from "../types";
import { getIntersectionsFromMouseEvent } from "../utils/picking";
import SpriteHandler from "./spriteHandler";

export default class NavigationHandler implements IDisposable {
  private camera: THREE.PerspectiveCamera;

  private pressedKeys: { [key: string]: boolean } = {};

  private direction = new THREE.Vector3();

  private lastMouseEvent?: MouseEvent;

  private speed = 5;

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

    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
    document.addEventListener("mousemove", this.saveMouseEvent);
    this.controls.addEventListener("change", this.renderer.render);

    this.updateCameraPosition();
  }

  public dispose = () => {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
    document.removeEventListener("mousemove", this.saveMouseEvent);
    this.controls.removeEventListener("change", this.renderer.render);
    this.controls.disconnect();
    this.controls.dispose();
    if (this.renderer.pointerLocked) this.togglePointerLock();
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    this.pressedKeys[event.key.toLowerCase()] = true;

    if (event.key === "t") this.togglePointerLock();
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    this.pressedKeys[event.key.toLowerCase()] = false;
  };

  private saveMouseEvent = (event: MouseEvent) => {
    this.lastMouseEvent = event;
  };

  private moveForward = () => {
    this.camera.getWorldDirection(this.direction);
    this.camera.position.addScaledVector(this.direction, this.speed);

    this.updateCameraPosition();
  };

  private moveBack = () => {
    this.camera.getWorldDirection(this.direction);
    this.camera.position.addScaledVector(this.direction, -this.speed);

    this.updateCameraPosition();
  };

  private moveUp = () => {
    this.camera.position.addScaledVector(this.camera.up, this.speed);

    this.updateCameraPosition();
  };

  private moveDown = () => {
    this.camera.position.addScaledVector(this.camera.up, -this.speed);

    this.updateCameraPosition();
  };

  private moveLeft = () => {
    this.controls.moveRight(-this.speed);

    this.updateCameraPosition();
  };

  private moveRight = () => {
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

  private keyMap = [
    {
      key: "w",
      mapper: this.moveForward,
    },
    {
      key: "a",
      mapper: this.moveLeft,
    },
    {
      key: "s",
      mapper: this.moveBack,
    },
    {
      key: "d",
      mapper: this.moveRight,
    },
    {
      key: "shift",
      mapper: this.moveDown,
    },
    {
      key: " ",
      mapper: this.moveUp,
    },
  ];

  public navigate = () => {
    let changed = false;

    this.keyMap.forEach((keyBinding) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (this.pressedKeys[keyBinding.key]) {
        keyBinding.mapper();
        changed = true;
      }
    });

    if (changed) this.renderer.render();
  };
}
