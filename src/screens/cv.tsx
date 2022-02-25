import React from "react";
import styled from "styled-components";

import {
  CVEntry,
  QuickInfo,
  Header,
  Heading,
  SocialMedia,
  Summary,
  ThinScreen,
} from "../components";
import { education, scholarships, volunteering, work } from "../content";
import { mediaQuery } from "../theme";

const Container = styled.div`
  margin: 30px 70px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;

  ${mediaQuery("tinyScreens")} {
    margin: 20px 20px 0px;
  }
`;

const StyledSocialMedia = styled(SocialMedia)`
  position: absolute;
  right: 0;
  top: -6px;

  ${mediaQuery("tinyScreens")} {
    top: -5px;
  }
`;

const StyledHeading = styled(Heading)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CV: React.FC = () => {
  return (
    <ThinScreen>
      <Header />
      <Container>
        <StyledSocialMedia />
        <Summary isCV />
        <StyledHeading text="Quick Info" />
        <QuickInfo />
        <StyledHeading text="Work Experience" />
        {work.map((w) => {
          return <CVEntry key={w.heading} {...w} />;
        })}
        <StyledHeading text="Education" />
        {education.map((e) => {
          return <CVEntry key={e.heading} {...e} noDay />;
        })}
        <StyledHeading text="Volunteering" />
        {volunteering.map((v) => {
          return <CVEntry key={v.heading} {...v} noDay noMonth />;
        })}
        <StyledHeading text="Scholarships" />
        {scholarships.map((s) => {
          return <CVEntry key={s.heading} {...s} noDay />;
        })}
      </Container>
    </ThinScreen>
  );
};
