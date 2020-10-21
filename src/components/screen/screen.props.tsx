import { HTMLAttributes } from "react";

export default interface ScreenProps extends HTMLAttributes<HTMLElement> {
  /** The name of one of the screen presets. */
  preset?: string;
}
