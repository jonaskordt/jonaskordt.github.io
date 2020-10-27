import React from "react";

import Card from "../card";
import cvImg from "./cv.png";
import presets from "./cvCard.module.scss";
import CVProps from "./cvCard.props";

const CVCard: React.FC<CVProps> = (props) => {
  return (
    <Card to="/cv" {...props}>
      <img className={presets.cvImg} src={cvImg} alt="" />
      <p className={presets.coHeader}>Current Occupation:</p>
      <p>M.Sc. IT Systems Engineering at HPI</p>
    </Card>
  );
};

export default CVCard;
