import { HTMLAttributes } from "react";

import { IUIToggleControl } from "../../../lib/types/controls";

interface ToggleControlProps
  extends HTMLAttributes<HTMLElement>,
    IUIToggleControl {
  preset?: string;
}

export default ToggleControlProps;
