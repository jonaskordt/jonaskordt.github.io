import { HTMLAttributes } from "react";

interface ControlInfoProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  controls: string[];
  action: string;
}

export default ControlInfoProps;
