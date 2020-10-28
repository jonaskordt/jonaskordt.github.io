import React from "react";

import { formatDate } from "../../../lib/utils/date";
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
    organizationLink,
    preset = "default",
    ...rest
  } = props;

  return (
    <div className={end ? presets[preset] : presets.active} {...rest}>
      <div className={presets.leftContainer}>
        <p>{formatDate(start, noDay, noMonth)} -</p>
        <p>{end ? formatDate(end, noDay, noMonth) : "present"}</p>
      </div>
      <div className={presets.container}>
        <Heading preset="cvCard" text={heading} />
        <a
          href={organizationLink}
          target="_blank"
          rel="noopener noreferrer"
          className={
            organizationLink ? presets.organizationLink : presets.organization
          }
        >
          {organization}
        </a>
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
