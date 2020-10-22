import React from "react";

import {
  summaryFinisher,
  summaryHeading,
  summaryText,
} from "../../../content/text/summary";
import Card from "../card";
import presets from "./summary.module.scss";
import SummaryProps from "./summary.props";

const Summary: React.FC<SummaryProps> = (props) => {
  return (
    <Card {...props}>
      <p className={presets.heading}>{summaryHeading}</p>
      <p>{summaryText}</p>
      <p className={presets.finisher}>{summaryFinisher}</p>
    </Card>
  );
};

export default Summary;
