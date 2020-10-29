import React from "react";

import ProgressBar from "../progressBar";
import presets from "./skill.module.scss";
import SkillProps from "./skill.props";

const Skill: React.FC<SkillProps> = (props) => {
  const { name, level, comment, preset = "default", ...rest } = props;

  return (
    <div className={presets[preset]} {...rest}>
      <div>
        <p>{name}</p>
        <ProgressBar level={level} />
      </div>
      {comment && <p>{comment}</p>}
    </div>
  );
};

export default Skill;
