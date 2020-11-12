import TransparentPlanes from ".";
import Controls from "../../../lib/types/controls";

const transparentPlanesControls: (
  canvasController: TransparentPlanes,
) => Controls = (canvasController: TransparentPlanes) => {
  return [
    // Toggle Controls
    [
      {
        action: "Default transparency",
        initialValue: false,
        callback: canvasController.setDefaultTransparency,
      },
      {
        action: "Separate plane parts",
        initialValue: false,
        callback: () => {},
      },
      {
        action: "Smooth controls",
        initialValue: true,
        callback: canvasController.setSmoothCameraControls,
      },
    ],
    // Slider Controls
    [
      {
        action: "Plane opacity",
        initialValue: 0.5,
        callback: canvasController.setOpacity,
      },
    ],
    // Mouse Controls
    [
      {
        action: "rotate view",
        controls: ["Drag & Drop"],
      },
      {
        action: "zoom",
        controls: ["Scroll"],
      },
      {
        action: "move the planes",
        controls: ["Ctrl", "Scroll"],
      },
    ],
    // Key Controls
    [],
  ];
};

export default transparentPlanesControls;
