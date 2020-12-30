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
      [
        {
          action: "use selected tool",
          controls: ["Tap"],
        },
        {
          action: "rotate view",
          controls: ["Drag"],
        },
        {
          action: "zoom",
          controls: ["Pinch"],
        },
      ],
    ],
    // Key Controls
    [
      {
        action: "toggle Fly-tControls",
        keys: ["t"],
        callback: canvasController.navigator.togglePointerLock,
        touchEnabled: false,
      },
      {
        action: "zoom in / move forward",
        keys: ["w"],
        callback: canvasController.navigator.moveForward,
        touchEnabled: false,
      },
      {
        action: "zoom out / move back",
        keys: ["s"],
        callback: canvasController.navigator.moveBack,
        touchEnabled: false,
      },
      {
        action: "move left",
        keys: ["a"],
        callback: canvasController.navigator.moveLeft,
        touchEnabled: false,
      },
      {
        action: "move right",
        keys: ["d"],
        callback: canvasController.navigator.moveRight,
        touchEnabled: false,
      },
      {
        action: "move up",
        keys: ["Space"],
        callback: canvasController.navigator.moveUp,
        touchEnabled: false,
      },
      {
        action: "move down",
        keys: ["Shift"],
        callback: canvasController.navigator.moveDown,
        touchEnabled: false,
      },
      {
        action: "undo",
        keys: ["Control", "z"],
        callback: canvasController.undo,
        touchEnabled: true,
      },
      {
        action: "redo",
        keys: ["Control", "y"],
        callback: canvasController.redo,
        touchEnabled: true,
      },
    ],
  ];
};

export default classifai3DControls;
