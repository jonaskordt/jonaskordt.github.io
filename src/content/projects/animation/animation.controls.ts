import Controls from "../../../lib/types/controls";

const animationControls = [
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

export default animationControls;
