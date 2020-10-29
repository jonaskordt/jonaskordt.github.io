import React from "react";

import CVEntry from "../../components/cv/cvEntry";
import QuickInfo from "../../components/cv/quickInfo";
import Header from "../../components/shared/header";
import Heading from "../../components/shared/heading";
import Screen from "../../components/shared/screen";
import Summary from "../../components/shared/summary";
import education from "../../content/cv/education";
import scholarships from "../../content/cv/scholarschips";
import volunteering from "../../content/cv/volunteering";
import work from "../../content/cv/work";
import presets from "./cv.module.scss";

const CV: React.FC = () => {
  return (
    <Screen>
      <Header />
      <div className={presets.container}>
        <Summary isCV preset="cv" />
        <Heading preset="cv" text="Quick Info" />
        <QuickInfo />
        <Heading preset="cv" text="Work experience" />
        {work.map((w) => {
          return <CVEntry key={w.heading} {...w} />;
        })}
        <Heading preset="cv" text="Education" />
        {education.map((e) => {
          return <CVEntry key={e.heading} {...e} noDay />;
        })}
        <Heading preset="cv" text="Volunteering" />
        {volunteering.map((v) => {
          return <CVEntry key={v.heading} {...v} noDay noMonth />;
        })}
        <Heading preset="cv" text="Scholarships" />
        {scholarships.map((s) => {
          return <CVEntry key={s.heading} {...s} noDay />;
        })}
      </div>
    </Screen>
  );
};

export default CV;
