import React from "react";

import { portraitImage } from "../../../content";
import { classNames } from "../../../styling";
import presets from "./portrait.module.scss";
import { PortraitProps } from "./portrait.props";

export const Portrait: React.FC<PortraitProps> = (props) => {
  const { className, children, preset = "default", ...rest } = props;

  return (
    <div {...rest} className={classNames(presets[preset], className)}>
      <img src={portraitImage} alt="" />
    </div>
  );
};
