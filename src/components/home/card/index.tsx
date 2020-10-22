import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import presets from "./card.module.scss";
import CardProps from "./card.props";

const Card: React.FC<CardProps> = (props) => {
  const { children, to, preset = "default", ...rest } = props;

  const history = useHistory();

  const clickHandler = useCallback(() => {
    if (to) {
      history.push(to);
    }
  }, [history, to]);

  return (
    <div
      {...rest}
      onClick={clickHandler}
      role="link"
      className={presets[preset]}
    >
      {children}
    </div>
  );
};

export default Card;
