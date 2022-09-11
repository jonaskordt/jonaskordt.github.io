import { HTMLAttributes } from "react";

export interface PaperLinksProps extends HTMLAttributes<HTMLElement> {
  doi?: string;
  pdfName?: string;
  link?: string;
}
