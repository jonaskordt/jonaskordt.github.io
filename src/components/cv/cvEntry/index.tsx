import React from "react";

import Heading from "../../shared/heading";
import presets from "./cvEntry.module.scss";
import CVEntryProps from "./cvEntry.props";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const padToTwo = (n: number) => n.toString().padStart(2, "0");

const formatDate = (d: Date, noDay = false, noMonth = false) =>
  // eslint-disable-next-line no-nested-ternary
  noDay
    ? noMonth
      ? d.getFullYear().toString()
      : `${months[d.getMonth()]} ${d.getFullYear()}`
    : `${padToTwo(d.getDate())}.${padToTwo(
        d.getMonth() + 1,
      )}.${d.getFullYear()}`;

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
