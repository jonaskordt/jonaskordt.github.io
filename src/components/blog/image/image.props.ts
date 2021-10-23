import { HTMLAttributes } from "react";

export interface ImageProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  image: string;
  subtitle?: string;
}
