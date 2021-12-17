import React from "react";

import { classNames } from "../../../styling";
import presets from "./progress-bar.module.scss";
import { ProgressBarProps } from "./progress-bar.props";

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { className, level, preset = "default", ...rest } = props;

  return (
    <div className={classNames(presets[preset], className)} {...rest}>
      <div className={presets.background} />
      <div
        className={presets.foreground}
        style={{ width: `${level * 100}%` }}
      />
    </div>
  );
};