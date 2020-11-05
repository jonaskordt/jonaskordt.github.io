import { HTMLAttributes } from "react";

import { IKeyControl } from "../../../lib/types/controls";

interface KeyControlProps extends HTMLAttributes<HTMLElement>, IKeyControl {
  preset?: string;
}

export default KeyControlProps;
