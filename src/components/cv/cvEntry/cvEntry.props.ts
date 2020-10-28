import { HTMLAttributes } from "react";

import CVEntryData from "../../../lib/types/cvEntryData";

export default interface CVEntryProps
  extends HTMLAttributes<HTMLElement>,
    CVEntryData {
  preset?: string;

  noDay?: boolean;
  noMonth?: boolean;
}
