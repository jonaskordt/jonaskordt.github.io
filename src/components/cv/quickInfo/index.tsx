import React from "react";

import {
  generalSkills,
  languages,
  techSkills,
} from "../../../content/cv/skills";
import Heading from "../../shared/heading";
import Skill from "../skill";
import presets from "./quickInfo.module.scss";
import QuickInfoProps from "./quickInfo.props";

const QuickInfo: React.FC<QuickInfoProps> = (props) => {
  const { preset = "default", ...rest } = props;

  return (
    <div className={presets[preset]} {...rest}>
      <div className={presets.languages}>
        <Heading preset="quickInfo" text="Languages" />
        {languages.map((s) => (
          <Skill key={s.name} {...s} />
        ))}
      </div>

      <div className={presets.generalSkills}>
        <Heading preset="quickInfo" text="Skills" />
        <div>
          {generalSkills.map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>
      </div>

      <div className={presets.tech}>
        <Heading preset="quickInfo" text="Tech" />
        {techSkills.map((s) => (
          <Skill key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
};

export default QuickInfo;
