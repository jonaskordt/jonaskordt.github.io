import React from "react";

import { formatDate } from "../../../lib";
import { classNames } from "../../../styling";
import { Heading } from "../../shared";
import presets from "./cv-entry.module.scss";
import { CVEntryProps } from "./cv-entry.props";

export const CVEntry: React.FC<CVEntryProps> = (props) => {
  const {
    className,
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
    <div
      className={classNames(end ? presets[preset] : presets.active, className)}
      {...rest}
    >
      <div className={presets.leftContainer}>
        <p>{formatDate(start, noDay, noMonth)} -</p>
        <p>{end ? formatDate(end, noDay, noMonth) : "present"}</p>
      </div>
      <div className={presets.container}>
        <Heading className={presets.heading} text={heading} />
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
