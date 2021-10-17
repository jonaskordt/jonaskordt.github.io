import React from "react";

import { Card } from "../../shared";
import cvImg from "./cv.png";
import presets from "./cv-card.module.scss";
import { CVCardProps } from "./cv-card.props";

export const CVCard: React.FC<CVCardProps> = (props) => {
  return (
    <Card to="/cv" {...props}>
      <img className={presets.cvImg} src={cvImg} alt="" />
      <p className={presets.coHeader}>Current Occupation:</p>
      <p>M.Sc. IT Systems Engineering at HPI</p>
    </Card>
  );
};
