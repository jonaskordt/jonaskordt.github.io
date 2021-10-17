import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  to?: string;
  displaySoonTag?: boolean;
  clickCallback?: () => void;
}
