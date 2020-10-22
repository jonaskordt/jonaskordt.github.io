import React from "react";

import presets from "./card.module.scss";
import CardProps from "./card.props";

const Card: React.FC<CardProps> = (props) => {
  const { children, preset = "default", ...rest } = props;

  return (
    <div {...rest} className={presets[preset]}>
      {children}
    </div>
  );
};

export default Card;
