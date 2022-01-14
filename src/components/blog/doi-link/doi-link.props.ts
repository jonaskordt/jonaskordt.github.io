import { HTMLAttributes } from "react";

export interface DoiLinkProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  doi: string;
}