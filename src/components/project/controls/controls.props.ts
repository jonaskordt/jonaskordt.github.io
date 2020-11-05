import { HTMLAttributes } from "react";

import Controls from "../../../lib/types/controls";

interface ControlsProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  toggleFullScreen: () => void;
  controls: Controls;
}

export default ControlsProps;
