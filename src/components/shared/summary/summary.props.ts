import { HTMLAttributes } from "react";

export interface SummaryProps extends HTMLAttributes<HTMLElement> {
  preset?: string;
  isCV?: boolean;
}
