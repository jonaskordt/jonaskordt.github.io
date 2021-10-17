import { TransparentPlanes } from "./transparent-planes";
import { Controls } from "../../../lib";

export const transparentPlanesControls: (
  canvasController: TransparentPlanes,
) => Controls = (canvasController: TransparentPlanes) => {
  return [
    // Toggle Controls
    [
      {
        action: "Enable textures",
        initialValue: true,
        callback: canvasController.setEnableTextures,
      },
      {
        action: "Separate plane parts",
        initialValue: false,
        callback: canvasController.setSeperatePlaneParts,
      },
      {
        action: "Default transparency",
        initialValue: false,
        callback: canvasController.setDefaultTransparency,
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
      [
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
    [],
  ];
};
