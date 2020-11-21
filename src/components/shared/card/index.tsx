import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import classNames from "../../../styling";
import presets from "./card.module.scss";
import CardProps from "./card.props";

const Card: React.FC<CardProps> = (props) => {
  const {
    className,
    children,
    to,
    clickCallback,
    preset = "default",
    displaySoonTag,
    ...rest
  } = props;

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
      onClick={clickCallback || clickHandler}
      role="link"
      className={classNames(presets[preset], className)}
    >
      {displaySoonTag && <p className={presets.soonTag}>Soon</p>}
      {children}
    </div>
  );
};

export default Card;
