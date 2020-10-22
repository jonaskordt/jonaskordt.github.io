import React from "react";

import presets from "./heading.module.scss";
import HeadingProps from "./heading.props";

const Heading: React.FC<HeadingProps> = (props) => {
  const { preset = "default", text, ...rest } = props;

  return (
    <p {...rest} className={presets[preset]}>
      {text}
    </p>
  );
};

export default Heading;
