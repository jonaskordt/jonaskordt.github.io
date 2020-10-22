import React from "react";

import {
  summaryFinisher,
  summaryHeading,
  summaryText,
} from "../../../content/text/summary";
import Heading from "../heading";
import presets from "./summary.module.scss";
import SummaryProps from "./summary.props";

const Summary: React.FC<SummaryProps> = (props) => {
  const { preset = "default", ...rest } = props;
  return (
    <div className={presets[preset]} {...rest}>
      <Heading text={summaryHeading} />
      <p>{summaryText}</p>
      <p className={presets.finisher}>{summaryFinisher}</p>
    </div>
  );
};

export default Summary;
