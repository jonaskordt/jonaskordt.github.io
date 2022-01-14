import React from "react";

import {
  CVEntry,
  QuickInfo,
  Header,
  Heading,
  SocialMedia,
  Summary,
  ThinScreen,
} from "../../components";
import { education, scholarships, volunteering, work } from "../../content";
import presets from "./cv.module.scss";

export const CV: React.FC = () => {
  return (
    <ThinScreen>
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
    </ThinScreen>
  );
};
