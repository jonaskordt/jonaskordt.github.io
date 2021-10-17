import { Controls } from "../../../lib";

export const animationControls = [
  [],
  [],
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
  [],
] as Controls;
