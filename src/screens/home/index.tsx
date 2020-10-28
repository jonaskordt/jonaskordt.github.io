import React from "react";

import CVCard from "../../components/home/cvCard";
import ProjectCard from "../../components/home/projectCard";
import Header from "../../components/shared/header";
import Heading from "../../components/shared/heading";
import Screen from "../../components/shared/screen";
import Summary from "../../components/shared/summary";
import classifai from "../../content/images/classifai.png";
import presets from "./home.module.scss";

const Home: React.FC = () => {
  return (
    <Screen>
      <Header />
      <div className={presets.upperContainer}>
        <Summary />
        <div className={presets.cvContainer}>
          <CVCard />
        </div>
      </div>
      <div className={presets.lowerContainer}>
        <div className={presets.lowerHeadingContainer}>
          <Heading text="Projects" />
        </div>
        <div className={presets.projectContainer}>
          <ProjectCard
            name="Classifai"
            text="World first usable active learning system for medical image segmentation. Developed as a bachelor’s project at HPI."
            projectId="classifai"
            image={classifai}
            isBlog
          />
          <ProjectCard
            name="Classifai 3D"
            text="My bachelor's thesis project. Enables 3D exploration and modification of MRI scans as an extension to Classifai."
            projectId="classifai3D"
            image={classifai}
          />
        </div>
      </div>
    </Screen>
  );
};

export default Home;
