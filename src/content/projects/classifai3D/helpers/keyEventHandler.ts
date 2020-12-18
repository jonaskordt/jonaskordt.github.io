import Classifai3D from "..";
import { IDisposable, Tool } from "../types";

export default class KeyEventHandler implements IDisposable {
  private pressedKeys: { [key: string]: boolean } = {};

  private continuousCallbacks: { keys: string[]; callback: () => void }[];
  private shortcuts: { keys: string[]; callback: () => void }[];

  constructor(classifai3D: Classifai3D) {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);

    this.continuousCallbacks = [
      {
        keys: ["w"],
        callback: classifai3D.navigator.moveForward,
      },
      {
        keys: ["a"],
        callback: classifai3D.navigator.moveLeft,
      },
      {
        keys: ["s"],
        callback: classifai3D.navigator.moveBack,
      },
      {
        keys: ["d"],
        callback: classifai3D.navigator.moveRight,
      },
      {
        keys: ["shift"],
        callback: () => {
          if (!this.pressedKeys.control && !this.pressedKeys.y) {
            classifai3D.navigator.moveDown();
          }
        },
      },
      {
        keys: [" "],
        callback: classifai3D.navigator.moveUp,
      },
    ];

    this.shortcuts = [
      {
        keys: ["t"],
        callback: classifai3D.navigator.togglePointerLock,
      },
      {
        keys: ["control", "shift", "z"],
        callback: classifai3D.redo,
      },
      {
        keys: ["control", "y"],
        callback: classifai3D.redo,
      },
      {
        keys: ["control", "z"],
        callback: classifai3D.undo,
      },
      {
        keys: ["i"],
        callback: () => {
          if (classifai3D.activeTool === Tool.Selection) {
            classifai3D.invertSelection();
          }
        },
      },
      {
        keys: ["c"],
        callback: () => {
          if (classifai3D.activeTool === Tool.Selection) {
            classifai3D.clearSelection();
          }
        },
      },
      {
        keys: ["backspace"],
        callback: () => {
          if (classifai3D.activeTool === Tool.Selection) {
            classifai3D.deleteSelection();
          }
        },
      },
    ];
  }

  public dispose = () => {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  };

  public tick = () => {
    this.continuousCallbacks.forEach((shortcut) => {
      if (shortcut.keys.every((key) => this.pressedKeys[key])) {
        shortcut.callback();
      }
    });
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    const pressedKey = event.key.toLowerCase();
    this.pressedKeys[pressedKey] = true;

    // Execute the first shortcut that is matched and needs the pressed key
    const shortcut = this.shortcuts.find(
      (s) =>
        s.keys.includes(pressedKey) &&
        s.keys.every((key) => this.pressedKeys[key]),
    );
    shortcut?.callback();

    // Prevent scrolling when hitting space
    if (pressedKey === " ") {
      event.preventDefault();
    }
  };

  private handleKeyUp = (event: KeyboardEvent) => {
    this.pressedKeys[event.key.toLowerCase()] = false;
  };
}
