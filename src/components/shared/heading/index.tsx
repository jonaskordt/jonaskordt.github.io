import React from "react";

import presets from "./heading.module.scss";
import HeadingProps from "./heading.props";

const Heading: React.FC<HeadingProps> = (props) => {
  const { preset = "default", text, ...rest } = props;

  return (
    <h1 {...rest} className={presets[preset]}>
      {text}
    </h1>
  );
};

export default Heading;
