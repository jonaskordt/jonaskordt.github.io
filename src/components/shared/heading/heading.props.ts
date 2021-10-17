import { HTMLAttributes } from "react";

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  text: string;
}
