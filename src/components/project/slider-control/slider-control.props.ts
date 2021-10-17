import { HTMLAttributes } from "react";

import { IUISliderControl } from "../../../lib";

export interface SliderControlProps
  extends HTMLAttributes<HTMLElement>,
    IUISliderControl {
  preset?: string;
}
