import { HTMLAttributes } from "react";

export interface PdfLinkProps extends HTMLAttributes<HTMLElement> {
  pdfName?: string;
  link?: string;
}
