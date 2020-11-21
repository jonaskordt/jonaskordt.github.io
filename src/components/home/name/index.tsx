import React from "react";

import classNames from "../../../styling";
import presets from "./name.module.scss";
import NameProps from "./name.props";

const Name: React.FC<NameProps> = (props) => {
  const { className, preset = "default", ...rest } = props;

  return (
    <div {...rest} className={classNames(presets[preset], className)}>
      Jonas Kordt
    </div>
  );
};

export default Name;
