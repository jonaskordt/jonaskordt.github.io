import { HTMLAttributes } from "react";

export interface CiatationLinkProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  link: string;
}
