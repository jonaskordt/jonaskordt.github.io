import React from "react";

import {
  generalSkills,
  languages,
  techSkills,
} from "../../../content/cv/skills";
import classNames from "../../../styling";
import Heading from "../../shared/heading";
import Skill from "../skill";
import presets from "./quickInfo.module.scss";
import QuickInfoProps from "./quickInfo.props";

const QuickInfo: React.FC<QuickInfoProps> = (props) => {
  const { className, preset = "default", ...rest } = props;

  return (
    <div className={classNames(presets[preset], className)} {...rest}>
      <div className={presets.languages}>
        <Heading className={presets.heading} text="Languages" />
        {languages.map((s) => (
          <Skill className={presets.barSkill} key={s.name} {...s} />
        ))}
      </div>

      <div className={presets.generalSkills}>
        <Heading className={presets.heading} text="Skills" />
        <div className={presets.generalSkillContainer}>
          {generalSkills.map((s) => (
            <p className={presets.generalSkill} key={s}>
              {s}
            </p>
          ))}
        </div>
      </div>

      <div className={presets.tech}>
        <Heading className={presets.heading} text="Tech" />
        {techSkills.map((s) => (
          <Skill className={presets.barSkill} key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
};

export default QuickInfo;
