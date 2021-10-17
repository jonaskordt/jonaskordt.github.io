import { HTMLAttributes } from "react";

import { IMouseControl } from "../../../lib";

export interface ControlInfoProps
  extends HTMLAttributes<HTMLElement>,
    IMouseControl {
  preset?: string;
}
