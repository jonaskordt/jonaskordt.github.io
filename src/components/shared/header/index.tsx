import React from "react";

import Name from "../../home/name";
import Portrait from "../../home/portrait";
import presets from "./header.module.scss";
import HeaderProps from "./header.props";

const Header: React.FC<HeaderProps> = (props) => {
  const { preset = "default", ...rest } = props;

  return (
    <div {...rest} className={presets[preset]}>
      <div className={presets.portrait_container}>
        <Portrait />
      </div>
      <div className={presets.name_container}>
        <Name />
      </div>
    </div>
  );
};

export default Header;
