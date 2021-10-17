import { HTMLAttributes } from "react";

export interface ProgressBarProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  level: number;
}
