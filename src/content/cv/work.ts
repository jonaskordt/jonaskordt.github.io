import CVEntryData from "./cvEntryData";

const work: CVEntryData[] = [
  {
    heading: "Scientific Assistant",
    organization: "Chair for digital health and machine learning at HPI",
    start: new Date(2020, 11, 1),
  },
  {
    heading: "Medicine Delivery Driver",
    organization: "Apotheke 4.0 (pharmacy)",
    details: ["doing my part to help during the COVID-19 pandemic"],
    start: new Date(2020, 9, 1),
  },
  {
    heading: "Java Developer & Tutor",
    organization: "Chair for system-analysis and modeling at HPI",
    details: [
      "development of webservices and simulators in Java as sample solutions for different lectures",
      "development of web interface for live ECG data using HTML, CSS, JavaScript",
      "prepare exercises for students",
      "prepare and execute practice lessons for students",
    ],
    start: new Date(2018, 9, 1),
    end: new Date(2019, 7, 31),
  },
  {
    heading: "Web Developer (internship)",
    organization: "Institute for School Quality of Berlin-Brandenburg",
    details: [
      "development of web portal for school inspection using PHP, MySQL, jQuery and CSS",
    ],
    start: new Date(2017, 8, 7),
    end: new Date(2017, 9, 15),
  },
  {
    heading: "Student Intern",
    organization: "Mercedes Benz AG",
    start: new Date(2013, 5, 27),
    end: new Date(2013, 6, 14),
  },
];

export default work;
