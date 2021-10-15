import React from "react";

import CVCard from "../../components/home/cvCard";
import ProjectCard from "../../components/home/projectCard";
import Header from "../../components/shared/header";
import Heading from "../../components/shared/heading";
import Screen from "../../components/shared/screen";
import SocialMedia from "../../components/shared/socialMedia";
import Summary from "../../components/shared/summary";
import { blogs, ContentType, homeOrder, papers, projects } from "../../content";
import { IContent } from "../../lib/types/content";
import presets from "./home.module.scss";

const Home: React.FC = () => {
  return (
    <Screen preset="home">
      <Header />
      <div className={presets.upperContainer}>
        <Summary className={presets.upperItem} />
        <div className={presets.cvContainer}>
          <CVCard />
        </div>
        <SocialMedia className={presets.socialMedia} />
      </div>
      <div className={presets.lowerContainer}>
        <div className={presets.lowerHeadingContainer}>
          <Heading text="Projects" />
        </div>
        <div className={presets.projectContainer}>
          {homeOrder.map((c) => {
            const content: IContent =
              // eslint-disable-next-line no-nested-ternary
              c.type === ContentType.Paper
                ? papers[c.id]
                : c.type === ContentType.Blog
                ? blogs[c.id]
                : projects[c.id];
            return (
              <ProjectCard
                className={presets.projectCard}
                name={content.shortName}
                text={content.quickSummary}
                projectId={c.id}
                type={c.type}
                isPreview={content.isPreview}
                image={content.img}
                key={content.name}
              />
            );
          })}
        </div>
      </div>
    </Screen>
  );
};

export default Home;
