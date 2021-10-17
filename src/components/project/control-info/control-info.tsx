import React from "react";

import { controlText } from "../../../lib";
import { classNames } from "../../../styling";
import presets from "./control-info.module.scss";
import { ControlInfoProps } from "./control-info.props";

export const ControlInfo: React.FC<ControlInfoProps> = (props) => {
  const { action, className, controls, preset = "default", ...rest } = props;

  const cText = controlText(controls);

  return (
    <div {...rest} className={classNames(presets[preset], className)}>
      <p className={presets.controls}>{cText}</p>
      <p className={presets.action}>to {action}</p>
    </div>
  );
};
