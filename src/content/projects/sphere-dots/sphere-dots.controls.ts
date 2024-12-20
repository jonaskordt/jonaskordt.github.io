import { SphereDots } from "./sphere-dots";
import { Controls } from "../../../lib";

export const sphereDotsControls = (canvasController: SphereDots) =>
  [
    [],
    [
      {
        action: "Amount of Points",
        callback: canvasController.setPointAmount,
        initialValue: 2048,
        min: 8,
        max: 10000,
        step: 8,
      },
    ],
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
