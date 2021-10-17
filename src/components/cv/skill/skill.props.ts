import { HTMLAttributes } from "react";

import { SkillData } from "../../../lib";

export interface SkillProps extends HTMLAttributes<HTMLElement>, SkillData {
  preset?: string;
}
