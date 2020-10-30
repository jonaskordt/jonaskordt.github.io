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
      window.scrollTo(0, 0);
    }
  }, [history, to]);

  return (
    <div
      {...rest}
      onClick={clickHandler}
      role="link"
      className={presets[preset]}
    >
      {Boolean(to) || <p className={presets.soonTag}>Soon</p>}
      {children}
    </div>
  );
};

export default Card;
