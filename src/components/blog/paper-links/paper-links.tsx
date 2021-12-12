import React from "react";

import { PaperLinksProps } from "./paper-links.props";
import { DoiLink } from "../doi-link";
import { PdfLink } from "../pdf-link";
import { classNames } from "../../../styling";

import presets from "./paper-links.module.scss";

export const PaperLinks: React.FC<PaperLinksProps> = (props) => {
  const { doi, pdfName, preset = "default", className } = props;

  return (
    <div className={classNames(presets[preset], className)}>
      {doi && <DoiLink doi={doi} />}
      {pdfName && <PdfLink pdfName={pdfName} />}
    </div>
  );
};
