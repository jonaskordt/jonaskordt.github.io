import Classifai3D from ".";
import Controls from "../../../lib/types/controls";

const classifai3DControls: (canvasController: Classifai3D) => Controls = (
  canvasController: Classifai3D,
) => {
  return [
    // Toggle Controls
    [
      {
        action: "Show Scan Slices",
        callback: canvasController.spriteHandler.setSpriteVisibility,
        initialValue: true,
      },
    ],
    // Slider Controls
    [
      {
        action: "Movement Speed",
        callback: canvasController.navigator.setSpeed,
        initialValue: 2,
        min: 0.1,
        max: 7,
      },
      {
        action: "Scan Slice Opacity",
        callback: canvasController.spriteHandler.setOpacity,
        initialValue: 0.5,
      },
      {
        action: "Scan Slice Contrast",
        callback: canvasController.spriteHandler.setContrast,
        initialValue: 0,
        min: -1,
        max: 1,
        logarithmic: true,
      },
      {
        action: "Scan Slice Brightness",
        callback: canvasController.spriteHandler.setBrightness,
        initialValue: 0,
        min: -1,
        max: 1,
        logarithmic: true,
      },
    ],
    // Mouse Controls
    [
      {
        action: "use selected tool",
        controls: ["Click"],
      },
      {
        action: "move scan slices",
        controls: ["Scroll", "Point"],
      },
      {
        action: "turn the camera (toggle controls on)",
        controls: ["Point"],
      },
    ],
    // Key Controls
    [
      {
        action: "toggle Controls",
        keys: ["t"],
        callback: canvasController.navigator.togglePointerLock,
      },
      {
        action: "move forward",
        keys: ["w"],
        callback: canvasController.navigator.moveForward,
      },
      {
        action: "move back",
        keys: ["s"],
        callback: canvasController.navigator.moveBack,
      },
      {
        action: "move left",
        keys: ["a"],
        callback: canvasController.navigator.moveLeft,
      },
      {
        action: "move right",
        keys: ["d"],
        callback: canvasController.navigator.moveRight,
      },
      {
        action: "move up",
        keys: ["Space"],
        callback: canvasController.navigator.moveUp,
      },
      {
        action: "move down",
        keys: ["Shift"],
        callback: canvasController.navigator.moveDown,
      },
      {
        action: "undo",
        keys: ["Control", "z"],
        callback: canvasController.undo,
      },
      {
        action: "redo",
        keys: ["Control", "y"],
        callback: canvasController.redo,
      },
    ],
  ];
};

export default classifai3DControls;
