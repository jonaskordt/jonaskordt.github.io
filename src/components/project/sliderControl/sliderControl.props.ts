import { HTMLAttributes } from "react";

import { IUISliderControl } from "../../../lib/types/controls";

interface SliderControlProps
  extends HTMLAttributes<HTMLElement>,
    IUISliderControl {
  preset?: string;
}

export default SliderControlProps;
