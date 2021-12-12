import React, { useCallback } from "react";
import { classNames } from "../../../styling";

import { DoiLinkProps } from "./doi-link.props";
import presets from "./doi-link.module.scss";
import { Card } from "../../shared";

export const DoiLink: React.FC<DoiLinkProps> = (props) => {
  const { className, preset = "default", doi, ...rest } = props;

  const doiLink = useCallback(() => {
    window.location.href = `https://doi.org/${doi}`;
  }, [doi]);

  return (
    <Card
      {...rest}
      clickCallback={doiLink}
      className={classNames(presets[preset], className)}
    >
      <p>DOI</p>
    </Card>
  );
};
