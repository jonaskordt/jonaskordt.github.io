import React from "react";

import presets from "./screen.module.scss";
import ScreenProps from "./screen.props";

const Screen: React.FC<ScreenProps> = (props) => {
  const { children, preset = "default", ...rest } = props;

  return (
    <main {...rest} className={presets[preset]}>
      {children}
    </main>
  );
};

export default Screen;
