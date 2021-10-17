import React from "react";

import { classNames } from "../../../styling";
import presets from "./heading.module.scss";
import { HeadingProps } from "./heading.props";

export const Heading: React.FC<HeadingProps> = (props) => {
  const { className, preset = "default", text, ...rest } = props;

  return (
    <h1 {...rest} className={classNames(presets[preset], className)}>
      {text}
    </h1>
  );
};
