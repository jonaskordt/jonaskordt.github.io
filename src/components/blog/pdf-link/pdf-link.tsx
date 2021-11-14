import React, { useCallback } from "react";
import { classNames } from "../../../styling";

import { PdfLinkProps } from "./pdf-link.props";
import presets from "./pdf-link.module.scss";
import { Card } from "../../shared";

export const PdfLink: React.FC<PdfLinkProps> = (props) => {
  const { className, preset = "default", pdfName, ...rest } = props;

  const link = useCallback(() => {
    window.location.href = `${`${
      window.location.href.split("#")[0]
    }pdf/${pdfName}`}.pdf`;
  }, [pdfName]);

  return (
    <Card
      {...rest}
      clickCallback={link}
      className={classNames(presets[preset], className)}
    >
      <p>PDF</p>
    </Card>
  );
};
