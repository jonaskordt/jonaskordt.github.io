import { HTMLAttributes } from "react";

import { IUIToggleControl } from "../../../lib";

export interface ToggleControlProps
  extends HTMLAttributes<HTMLElement>,
    IUIToggleControl {
  preset?: string;
}
