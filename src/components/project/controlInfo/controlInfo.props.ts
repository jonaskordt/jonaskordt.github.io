import { HTMLAttributes } from "react";

import { IMouseControl } from "../../../lib/types/controls";

interface ControlInfoProps extends HTMLAttributes<HTMLElement>, IMouseControl {
  preset?: string;
}

export default ControlInfoProps;
