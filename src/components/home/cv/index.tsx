import React from "react";

import Card from "../card";
import presets from "./cv.module.scss";
import CVProps from "./cv.props";

const CV: React.FC<CVProps> = (props) => {
  return (
    <Card {...props}>
      <div className={presets.container}>
        <p className={presets.c}>C</p>
        <p className={presets.v}>V</p>
        <p className={presets.urriculum}>urriculum</p>
        <p className={presets.itae}>itae</p>
      </div>
      <p className={presets.co_header}>Current Occupation:</p>
      <p className={presets.co_text}>M.Sc. IT Systems Engineering at HPI</p>
    </Card>
  );
};

export default CV;
