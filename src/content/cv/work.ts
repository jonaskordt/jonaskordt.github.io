import { CVEntryData } from "../../lib";

export const work: CVEntryData[] = [
  {
    heading: "Software Engineer",
    organization: "cula",
    details: ["full stack development using Vue, NestJS, and TypeScript"],
    start: new Date(2023, 10, 1),
    organizationLink: "https://www.cula.tech",
  },
  {
    heading: "Software Engineer",
    organization: "mama health",
    details: [
      "full stack development using React, NestJS, and TypeScript",
      "Tableau dashboard extension development",
    ],
    start: new Date(2023, 6, 1),
    end: new Date(2023, 9, 31),
    organizationLink: "https://www.mamahealth.io",
  },
  {
    heading: "Software Engineering Team Leader",
    organization: "Immunkarte",
    details: [
      "project management",
      "full stack development using React, NestJS, and TypeScript",
      "consulting on machine learning solutions",
    ],
    start: new Date(2021, 11, 1),
    end: new Date(2023, 5, 30),
    organizationLink: "https://immunkarte.de",
  },
  {
    heading: "Research Assistant",
    organization: "Chair for Digital Health and Machine Learning at HPI",
    details: [
      "full stack development of VISIAN (web based medical segmentation system)",
      "focus on graphics using WebGL through Three.js",
      "active machine learning research in the medical field",
      "supervision of bachelor students",
    ],
    start: new Date(2020, 10, 1),
    end: new Date(2022, 2, 31),
    organizationLink:
      "https://hpi.de/forschung/fachgebiete/digital-health-machine-learning.html",
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
];
