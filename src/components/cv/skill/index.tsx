import React from "react";

import classNames from "../../../styling";
import ProgressBar from "../progressBar";
import presets from "./skill.module.scss";
import SkillProps from "./skill.props";

const Skill: React.FC<SkillProps> = (props) => {
  const {
    className,
    name,
    level,
    comment,
    preset = "default",
    ...rest
  } = props;

  return (
    <div className={classNames(presets[preset], className)} {...rest}>
      <div className={presets.container}>
        <p className={presets.name}>{name}</p>
        <ProgressBar className={presets.progressBar} level={level} />
      </div>
      {comment && <p className={presets.comment}>{comment}</p>}
    </div>
  );
};

export default Skill;
