import React from "react";
import { classNames } from "../../../styling";

import { ImageProps } from "./image.props";
import presets from "./image.module.scss";

export const Image: React.FC<ImageProps> = (props) => {
  const { className, preset = "default", image, subtitle, ...rest } = props;

  return (
    <div {...rest} className={classNames(presets[preset], className)}>
      <img className={presets.image} src={image} alt="" />
      {subtitle && <p className={presets.subtitle}>{subtitle}</p>}
    </div>
  );
};
