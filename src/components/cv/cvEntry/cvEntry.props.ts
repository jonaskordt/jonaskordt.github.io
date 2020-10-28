import { HTMLAttributes } from "react";

import CVEntryData from "../../../content/cv/cvEntryData";

export default interface CVEntryProps
  extends HTMLAttributes<HTMLElement>,
    CVEntryData {
  preset?: string;

  noDay?: boolean;
  noMonth?: boolean;
}
