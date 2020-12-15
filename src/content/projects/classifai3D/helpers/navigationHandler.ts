import * as THREE from "three";

import Classifai3D from "..";
import { IDisposable } from "../types";
import SpriteHandler from "./spriteHandler";

export default class NavigationHandler implements IDisposable {
  private camera: THREE.PerspectiveCamera;

  private pressedKeys: any = {};

  private direction = new THREE.Vector3();
  private quaternion = new THREE.Quaternion();

  private lastMouseEvent?: MouseEvent;

  private speed = 5;

  constructor(
    private renderer: Classifai3D,
    private canvas: HTMLCanvasElement,
    private spriteHandler: SpriteHandler,
  ) {
    this.camera = renderer.camera;

    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
    document.addEventListener("mousemove", this.saveMouseEvent);

    this.updateCameraPosition();
  }

  public dispose = () => {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
    document.removeEventListener("mousemove", this.saveMouseEvent);
    if (this.renderer.pointerLocked) this.togglePointerLock();
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.pressedKeys[event.keyCode] = true;
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.pressedKeys[event.keyCode] = false;
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
    // don't move during crtl + s for saving
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (this.pressedKeys[17]) return;

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
    this.camera.getWorldDirection(this.direction);
    this.direction.cross(this.camera.up);
    this.camera.position.addScaledVector(this.direction, -this.speed);

    this.updateCameraPosition();
  };

  private moveRight = () => {
    this.camera.getWorldDirection(this.direction);
    this.direction.cross(this.camera.up);
    this.camera.position.addScaledVector(this.direction, this.speed);

    this.updateCameraPosition();
  };

  private turn = (amount: number) => {
    this.quaternion.setFromAxisAngle(this.camera.up, -amount * 0.001);
    this.camera.applyQuaternion(this.quaternion);
    this.renderer.render();
  };

  private pitch = (amount: number) => {
    this.camera.getWorldDirection(this.direction);
    this.direction.cross(this.camera.up);
    this.quaternion.setFromAxisAngle(this.direction, -amount * 0.001);
    this.camera.applyQuaternion(this.quaternion);
    this.renderer.render();
  };

  private updateCameraPosition = () => {
    this.spriteHandler.setCameraPosition(this.camera.position);
  };

  private handleMouseMove = (event: MouseEvent) => {
    this.turn(event.movementX);
    this.pitch(event.movementY);
  };

  public togglePointerLock = () => {
    if (this.renderer.pointerLocked) {
      document.exitPointerLock();
      document.removeEventListener("mousemove", this.handleMouseMove);
    } else {
      this.canvas.requestPointerLock();
      document.addEventListener("mousemove", this.handleMouseMove);
    }
    this.renderer.togglePointerLock();
    this.renderer.render();
  };

  // public increaseSpritePosition = () => {
  //   if (!this.lastMouseEvent) return;

  //   const intersections = getIntersectionsFromMouseEvent(
  //     this.lastMouseEvent,
  //     this.renderer.spriteHandler.spriteParts,
  //     this.eraserModel,
  //     this.renderer.canvas,
  //     this.renderer.camera,
  //   );

  //   if (intersections.length) {
  //     const hoveredViewType = intersections[0].object.userData.viewType;
  //     switch (hoveredViewType) {
  //       case ViewType.Transverse:
  //         this.eraserModel.selectedVoxel.setZ(
  //           Math.min(
  //             this.eraserModel.scan!.voxelCount.z - 1,
  //             this.eraserModel.selectedVoxel.z + 1,
  //           ),
  //         );
  //         break;
  //       case ViewType.Sagittal:
  //         this.eraserModel.selectedVoxel.setX(
  //           Math.min(
  //             this.eraserModel.scan!.voxelCount.x - 1,
  //             this.eraserModel.selectedVoxel.x + 1,
  //           ),
  //         );
  //         break;
  //       case ViewType.Coronal:
  //         this.eraserModel.selectedVoxel.setY(
  //           Math.min(
  //             this.eraserModel.scan!.voxelCount.y - 1,
  //             this.eraserModel.selectedVoxel.y + 1,
  //           ),
  //         );
  //         break;
  //     }
  //   }
  // };

  // public decreaseSpritePosition = () => {
  //   if (!this.lastMouseEvent) return;

  //   const intersections = getIntersectionsFromMouseEvent(
  //     this.lastMouseEvent,
  //     this.renderer.spriteHandler.spriteParts,
  //     this.eraserModel,
  //     this.renderer.canvas,
  //     this.renderer.camera,
  //   );

  //   if (intersections.length) {
  //     const hoveredViewType = intersections[0].object.userData.viewType;
  //     switch (hoveredViewType) {
  //       case ViewType.Transverse:
  //         this.eraserModel.selectedVoxel.setZ(
  //           Math.max(0, this.eraserModel.selectedVoxel.z - 1),
  //         );
  //         break;
  //       case ViewType.Sagittal:
  //         this.eraserModel.selectedVoxel.setX(
  //           Math.max(0, this.eraserModel.selectedVoxel.x - 1),
  //         );
  //         break;
  //       case ViewType.Coronal:
  //         this.eraserModel.selectedVoxel.setY(
  //           Math.max(0, this.eraserModel.selectedVoxel.y - 1),
  //         );
  //         break;
  //     }
  //   }
  // };

  private keyMap = [
    {
      key: 87, // w
      mapper: this.moveForward,
    },
    {
      key: 65, // a
      mapper: this.moveLeft,
    },
    {
      key: 83, // s
      mapper: this.moveBack,
    },
    {
      key: 68, // d
      mapper: this.moveRight,
    },
    {
      key: 16, // Shift
      mapper: this.moveDown,
    },
    {
      key: 32, // Space
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
