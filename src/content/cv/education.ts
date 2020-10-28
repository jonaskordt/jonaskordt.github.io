import CVEntryData from "../../lib/types/cvEntryData";

const education: CVEntryData[] = [
  {
    heading: "Aspiring Master of Science: IT-System Engineering",
    organization: "Hasso-Plattner-Institute at the University of Potsdam",
    start: new Date(2020, 9, 1),
    organizationLink: "https://hpi.de",
  },
  {
    heading: "Bachelor of Science: IT-System Engineering",
    organization: "Hasso-Plattner-Institute at the University of Potsdam",
    details: ['average grade: 1.2 "with distinction" (A)'],
    start: new Date(2017, 9, 1),
    end: new Date(2020, 7, 31),
    organizationLink: "https://hpi.de",
  },
  {
    heading: "High School",
    organization: "Werner-von-Siemens-Gymnasium",
    details: ["diploma: German High-School-Diploma", "average grade: 1.0 (A)"],
    start: new Date(2010, 7, 1),
    end: new Date(2017, 5, 31),
    organizationLink: "https://www.siemens-gymnasium-berlin.de",
  },
  {
    heading: "Exchange Year",
    organization: "River Bluff High School",
    details: ["Lexington, South Carolina, USA"],
    start: new Date(2014, 7, 1),
    end: new Date(2015, 5, 31),
    organizationLink: "http://rbhs.lexington1.net",
  },
];

export default education;
