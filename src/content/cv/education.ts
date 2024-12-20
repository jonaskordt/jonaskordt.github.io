import { CVEntryData } from "../../lib";

export const education: CVEntryData[] = [
  {
    heading: "Master of Science: IT System Engineering",
    organization: "Hasso-Plattner-Institute at the University of Potsdam",
    details: ['average grade: 1.0 "with distinction" (A)'],
    start: new Date(2020, 9),
    end: new Date(2024, 5),
    organizationLink: "https://hpi.de",
  },
  {
    heading: "Bachelor of Science: IT System Engineering",
    organization: "Hasso-Plattner-Institute at the University of Potsdam",
    details: ['average grade: 1.2 "with distinction" (A)'],
    start: new Date(2017, 9),
    end: new Date(2020, 7),
    organizationLink: "https://hpi.de",
  },
  {
    heading: "High School",
    organization: "Werner-von-Siemens-Gymnasium",
    details: ["diploma: German High-School-Diploma", "average grade: 1.0 (A)"],
    start: new Date(2010, 7),
    end: new Date(2017, 5),
    organizationLink: "https://www.siemens-gymnasium-berlin.de",
  },
  {
    heading: "Exchange Year",
    organization: "River Bluff High School",
    details: ["Lexington, South Carolina, USA"],
    start: new Date(2014, 7),
    end: new Date(2015, 5),
    organizationLink: "http://rbhs.lexington1.net",
  },
];
