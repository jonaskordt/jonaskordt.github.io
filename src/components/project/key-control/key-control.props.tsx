import { HTMLAttributes } from "react";

import { IKeyControl } from "../../../lib";

export interface KeyControlProps
  extends HTMLAttributes<HTMLElement>,
    IKeyControl {
  preset?: string;
}
