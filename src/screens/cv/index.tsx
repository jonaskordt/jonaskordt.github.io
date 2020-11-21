import React from "react";

import CVEntry from "../../components/cv/cvEntry";
import QuickInfo from "../../components/cv/quickInfo";
import Header from "../../components/shared/header";
import Heading from "../../components/shared/heading";
import Screen from "../../components/shared/screen";
import SocialMedia from "../../components/shared/socialMedia";
import Summary from "../../components/shared/summary";
import education from "../../content/cv/education";
import scholarships from "../../content/cv/scholarschips";
import volunteering from "../../content/cv/volunteering";
import work from "../../content/cv/work";
import presets from "./cv.module.scss";

const CV: React.FC = () => {
  return (
    <Screen preset="thin">
      <Header />
      <div className={presets.container}>
        <SocialMedia className={presets.socialMedia} />
        <Summary isCV />
        <Heading className={presets.heading} text="Quick Info" />
        <QuickInfo />
        <Heading className={presets.heading} text="Work Experience" />
        {work.map((w) => {
          return <CVEntry className={presets.entry} key={w.heading} {...w} />;
        })}
        <Heading className={presets.heading} text="Education" />
        {education.map((e) => {
          return (
            <CVEntry className={presets.entry} key={e.heading} {...e} noDay />
          );
        })}
        <Heading className={presets.heading} text="Volunteering" />
        {volunteering.map((v) => {
          return (
            <CVEntry
              className={presets.entry}
              key={v.heading}
              {...v}
              noDay
              noMonth
            />
          );
        })}
        <Heading className={presets.heading} text="Scholarships" />
        {scholarships.map((s) => {
          return (
            <CVEntry className={presets.entry} key={s.heading} {...s} noDay />
          );
        })}
      </div>
    </Screen>
  );
};

export default CV;
