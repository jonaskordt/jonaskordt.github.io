import React from "react";

import portrait from "../../../content/images/portrait.png";
import classNames from "../../../styling";
import presets from "./portrait.module.scss";
import PortraitProps from "./portrait.props";

const Portrait: React.FC<PortraitProps> = (props) => {
  const { className, children, preset = "default", ...rest } = props;

  return (
    <div {...rest} className={classNames(presets[preset], className)}>
      <img src={portrait} alt="" />
    </div>
  );
};

export default Portrait;
