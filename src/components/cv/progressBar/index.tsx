import React from "react";

import presets from "./progressBar.module.scss";
import ProgressBarProps from "./progressBar.props";

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { level, preset = "default", ...rest } = props;

  return (
    <div className={presets[preset]} {...rest}>
      <div className={presets.background} />
      <div
        className={presets.foreground}
        style={{ width: `${level * 100}%` }}
      />
    </div>
  );
};

export default ProgressBar;
