import { HTMLAttributes } from "react";

interface ToggleControlProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  action: string;
  initialValue: boolean;
  set: (state: boolean) => void;
}

export default ToggleControlProps;
