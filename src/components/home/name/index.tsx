import React from "react";

import presets from "./name.module.scss";
import NameProps from "./name.props";

const Name: React.FC<NameProps> = (props) => {
  const { children, preset = "default", ...rest } = props;

  return (
    <div {...rest} className={presets[preset]}>
      Jonas Kordt
    </div>
  );
};

export default Name;
