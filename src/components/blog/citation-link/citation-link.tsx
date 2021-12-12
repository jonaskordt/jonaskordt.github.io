import React from "react";
import { classNames } from "../../../styling";

import { CiatationLinkProps } from "./ciatation-link.props";
import presets from "./citation-link.module.scss";

export const CitationLink: React.FC<CiatationLinkProps> = (props) => {
  const { className, preset = "default", link, ...rest } = props;

  return (
    <a
      className={classNames(presets[preset], className)}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {link}
    </a>
  );
};
