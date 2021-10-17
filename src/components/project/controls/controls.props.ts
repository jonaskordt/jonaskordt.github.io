import { HTMLAttributes } from "react";

import { Controls } from "../../../lib";

export interface ControlsProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  toggleFullScreen: () => void;
  controls: Controls;
}
