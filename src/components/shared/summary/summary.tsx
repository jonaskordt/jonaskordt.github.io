import React from "react";

import { summaryFinisher, summaryHeading, summaryText } from "../../../content";
import { classNames } from "../../../styling";
import { Heading } from "../heading";
import presets from "./summary.module.scss";
import { SummaryProps } from "./summary.props";

export const Summary: React.FC<SummaryProps> = (props) => {
  const { className, preset = "default", isCV, ...rest } = props;
  return (
    <div className={classNames(presets[preset], className)} {...rest}>
      <Heading text={summaryHeading} />
      {summaryText}
      {isCV || <p className={presets.finisher}>{summaryFinisher}</p>}
    </div>
  );
};