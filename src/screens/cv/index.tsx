import React from "react";

import CVEntry from "../../components/cv/cvEntry";
import Header from "../../components/shared/header";
import Heading from "../../components/shared/heading";
import Screen from "../../components/shared/screen";
import Summary from "../../components/shared/summary";
import work from "../../content/cv/work";
import presets from "./cv.module.scss";

const CV: React.FC = () => {
  return (
    <Screen>
      <Header />
      <div className={presets.container}>
        <Summary isCV preset="cv" />
        <Heading text="Work experience" />
        {work.map((w) => {
          return <CVEntry key={w.heading} {...w} />;
        })}
      </div>
    </Screen>
  );
};

export default CV;
