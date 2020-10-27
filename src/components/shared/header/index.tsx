import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import Name from "../../home/name";
import Portrait from "../../home/portrait";
import presets from "./header.module.scss";
import HeaderProps from "./header.props";

const Header: React.FC<HeaderProps> = (props) => {
  const { preset = "default", ...rest } = props;

  const history = useHistory();

  const clickHandler = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <div {...rest} className={presets[preset]}>
      <div className={presets.portrait_container}>
        <Portrait />
      </div>
      <div
        onClick={clickHandler}
        role="link"
        className={presets.name_container}
      >
        <Name />
      </div>
    </div>
  );
};

export default Header;
