import { HTMLAttributes } from "react";

import SkillData from "../../../lib/types/skillData";

export default interface SkillProps
  extends HTMLAttributes<HTMLElement>,
    SkillData {
  preset?: string;
}
