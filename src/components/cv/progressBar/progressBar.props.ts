import { HTMLAttributes } from "react";

export default interface ProgressBarProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  level: number;
}
