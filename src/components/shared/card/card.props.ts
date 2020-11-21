import { HTMLAttributes } from "react";

export default interface CardProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  to?: string;
  displaySoonTag?: boolean;
  clickCallback?: () => void;
}
