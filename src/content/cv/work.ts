import CVEntryData from "../../lib/types/cvEntryData";

const work: CVEntryData[] = [
  {
    heading: "Research Assistant",
    organization: "Chair for Digital Health and Machine Learning at HPI",
    start: new Date(2020, 10, 1),
    organizationLink:
      "https://hpi.de/forschung/fachgebiete/digital-health-machine-learning.html",
  },
  {
    heading: "Medicine Delivery Driver",
    organization: "Apotheke 4.0 (pharmacy)",
    details: ["doing my part to help during the COVID-19 pandemic"],
    start: new Date(2020, 8, 1),
  },
  {
    heading: "Java Developer & Tutor",
    organization: "Chair for System-Analysis and Modeling at HPI",
    details: [
      "development of webservices and simulators in Java as sample solutions for different lectures",
      "development of web interface for live ECG data using HTML, CSS, JavaScript",
      "prepare exercises for students",
      "prepare and execute practice lessons for students",
    ],
    start: new Date(2018, 8, 1),
    end: new Date(2019, 6, 31),
    organizationLink:
      "https://hpi.de/forschung/fachgebiete/systemanalyse-und-modellierung.html",
  },
  {
    heading: "Web Developer (internship)",
    organization: "Institute for School Quality of Berlin-Brandenburg",
    details: [
      "development of web portal for school inspection using PHP, MySQL, jQuery and CSS",
    ],
    start: new Date(2017, 7, 7),
    end: new Date(2017, 8, 15),
    organizationLink: "https://www.isq-bb.de/wordpress/",
  },
  {
    heading: "Student Intern",
    organization: "Mercedes Benz AG",
    start: new Date(2013, 4, 27),
    end: new Date(2013, 5, 14),
  },
];

export default work;
