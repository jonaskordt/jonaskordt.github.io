import { HTMLAttributes } from "react";

export interface PdfLinkProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  pdfName: string;
}
