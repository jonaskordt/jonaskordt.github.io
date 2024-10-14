import React from "react";
import styled from "styled-components";

import {
  CVCard,
  ProjectCard,
  Header,
  Heading,
  SocialMedia,
  Summary,
  ThinScreen,
} from "../components";
import { blogs, ContentType, homeOrder, papers, projects } from "../content";
import { IContent } from "../lib";
import { mediaQuery } from "../theme";

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  margin: 0px 50px 0px;

  ${mediaQuery("smallerScreens")} {
    margin: 0;
  }
`;

const UpperContainer = styled(Container)`
  justify-content: space-between;
  padding-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;
  gap: 60px;
  flex-direction: column;
  align-items: center;

  ${mediaQuery("tinyScreens")} {
    padding-top: 20px;
    padding-bottom: 0px;
    margin-right: 10px;
    margin-left: 10px;
    padding-right: 10px;
    padding-left: 10px;
  }
`;

const StyledSocialMedia = styled(SocialMedia)`
  position: absolute;
  right: 20px;
  top: 19px;

  ${mediaQuery("tinyScreens")} {
    right: 10px;
    top: 15px;
  }
`;

const LowerContainer = styled(Container)`
  align-items: flex-start;
  flex-direction: column;
  padding: 0 5px;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 15px 15px;
  align-items: center;
  align-self: stretch;
`;

const StyledHeading = styled(Heading)`
  padding-left: 15px;
  padding-right: 15px;
  align-self: stretch;
  text-align: center;

  @media (max-width: 450px) {
    text-align: left;
  }
`;

export const Home: React.FC = () => {
  return (
    <ThinScreen>
      <Header />
      <UpperContainer>
        {/* <StyledSummary /> */}
        {/* <CVContainer>
          <CVCard />
        </CVContainer> */}
        <StyledSocialMedia />
      </UpperContainer>
      <LowerContainer>
        <StyledHeading text="Projects" />
        <ProjectContainer>
          {homeOrder.map((c, index) => {
            const content: IContent =
              // eslint-disable-next-line no-nested-ternary
              c.type === ContentType.Paper
                ? papers[c.id]
                : c.type === ContentType.Blog
                ? blogs[c.id]
                : projects[c.id];
            return (
              <ProjectCard
                name={content.shortName}
                link={c.link}
                text={content.quickSummary}
                projectId={c.id}
                type={c.type}
                isPreview={content.isPreview}
                image={content.img}
                key={content.name}
                isLast={index === homeOrder.length - 1}
              />
            );
          })}
        </ProjectContainer>
      </LowerContainer>
    </ThinScreen>
  );
};
