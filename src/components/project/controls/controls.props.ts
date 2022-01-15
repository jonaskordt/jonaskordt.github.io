import { HTMLAttributes } from "react";

import { Controls } from "../../../lib";

export interface ControlsProps extends HTMLAttributes<HTMLElement> {
  toggleFullScreen: () => void;
  controls: Controls;
}
