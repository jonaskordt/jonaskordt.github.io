import React from "react";

import Heading from "../../shared/heading";
import presets from "./cvEntry.module.scss";
import CVEntryProps from "./cvEntry.props";

const padToTwo = (n: number) => n.toString().padStart(2, "0");

const formatDate = (d: Date) =>
  `${padToTwo(d.getDate())}.${padToTwo(d.getMonth())}.${d.getFullYear()}`;

const CVEntry: React.FC<CVEntryProps> = (props) => {
  const {
    heading,
    organization,
    details,
    start,
    end,
    preset = "default",
    ...rest
  } = props;

  return (
    <div className={presets[preset]} {...rest}>
      <div className={presets.leftContainer}>
        <p>{formatDate(start)} -</p>
        <p>{end ? formatDate(end) : "present"}</p>
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
