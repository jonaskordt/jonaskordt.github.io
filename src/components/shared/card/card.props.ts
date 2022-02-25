import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  to?: string;
  link?: string;
  displaySoonTag?: boolean;
  clickCallback?: () => void;
}
