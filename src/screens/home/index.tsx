import React from "react";

import CVCard from "../../components/home/cvCard";
import Header from "../../components/home/header";
import Heading from "../../components/home/heading";
import ProjectCard from "../../components/home/projectCard";
import Summary from "../../components/home/summary";
import Screen from "../../components/screen";
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
            name="Classifai"
            text="World first usable active learning system for medical image segmentation. Developed as a bachelor’s project at HPI."
            projectId="classifai"
            image={classifai}
          />
        </div>
      </div>
    </Screen>
  );
};

export default Home;
