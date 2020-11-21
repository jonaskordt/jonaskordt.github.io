import React from "react";

import classNames from "../../../styling";
import presets from "./screen.module.scss";
import ScreenProps from "./screen.props";

const Screen: React.FC<ScreenProps> = (props) => {
  const { className, children, preset = "default", ...rest } = props;

  return (
    <main {...rest} className={classNames(presets[preset], className)}>
      {children}
    </main>
  );
};

export default Screen;
