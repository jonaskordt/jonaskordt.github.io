import React from "react";

import portrait from "../../../content/images/portrait.jpeg";
import presets from "./portrait.module.scss";
import PortraitProps from "./portrait.props";

const Portrait: React.FC<PortraitProps> = (props) => {
  const { children, preset = "default", ...rest } = props;

  return (
    <div {...rest} className={presets[preset]}>
      <img src={portrait} alt="" />
    </div>
  );
};

export default Portrait;
