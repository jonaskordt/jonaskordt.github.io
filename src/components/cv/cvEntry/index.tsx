import React from "react";

import { formatDate } from "../../../utils/date";
import Heading from "../../shared/heading";
import presets from "./cvEntry.module.scss";
import CVEntryProps from "./cvEntry.props";

const CVEntry: React.FC<CVEntryProps> = (props) => {
  const {
    heading,
    organization,
    details,
    start,
    end,
    noDay,
    noMonth,
    preset = "default",
    ...rest
  } = props;

  return (
    <div className={presets[preset]} {...rest}>
      <div className={presets.leftContainer}>
        <p>{formatDate(start, noDay, noMonth)} -</p>
        <p>{end ? formatDate(end, noDay, noMonth) : "present"}</p>
      </div>
      <div className={presets.container}>
        <Heading preset="cv" text={heading} />
        <p className={presets.organization}>{organization}</p>
        {details && (
          <ul>
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CVEntry;
