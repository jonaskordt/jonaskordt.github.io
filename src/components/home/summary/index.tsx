import React from "react";

import presets from "./summary.module.scss";
import SummaryProps from "./summary.props";

const Summary: React.FC<SummaryProps> = (props) => {
  const { preset = "default", ...rest } = props;

  return (
    <div {...rest} className={presets[preset]}>
      <p className={presets.heading}>Me in a Nutshell</p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet.
      </p>
    </div>
  );
};

export default Summary;
