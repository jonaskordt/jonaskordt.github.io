import { HTMLAttributes } from "react";

export interface PaperLinksProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  doi?: string;
  pdfName?: string;
}
