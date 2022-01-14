import { HTMLAttributes } from "react";

export interface ImageProps extends HTMLAttributes<HTMLElement> {
  image: string;
  subtitle?: string;
}
