import { HTMLAttributes } from "react";

interface ControlsProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  toggleFullScreen: () => void;
}

export default ControlsProps;
