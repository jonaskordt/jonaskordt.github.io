import { HTMLAttributes } from "react";

export default interface ScreenProps extends HTMLAttributes<HTMLElement> {
  preset?: string;
}
