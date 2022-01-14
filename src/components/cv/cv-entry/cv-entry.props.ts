import { HTMLAttributes } from "react";

import { CVEntryData } from "../../../lib";

export interface CVEntryProps extends HTMLAttributes<HTMLElement>, CVEntryData {
  noDay?: boolean;
  noMonth?: boolean;
}
