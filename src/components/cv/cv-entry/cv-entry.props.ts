import { HTMLAttributes } from "react";

import { CVEntryData } from "../../../lib";

export interface CVEntryProps extends HTMLAttributes<HTMLElement>, CVEntryData {
  preset?: string;

  noDay?: boolean;
  noMonth?: boolean;
}
