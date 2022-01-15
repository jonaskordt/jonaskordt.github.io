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
import { color, mediaQuery } from "../theme";

const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  margin: 0px 50px 0px;

  ${mediaQuery("tinyScreens")} {
    margin: 0px 10px 0px;
  }
`;

const UpperContainer = styled(Container)`
  border-bottom: 1px solid ${color("border")};
  justify-content: space-between;
  padding-bottom: 30px;
  padding-top: 30px;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;
  gap: 40px;

  ${mediaQuery("smallScreens")} {
    flex-direction: column;
  }
`;

const CVContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  margin-top: 70px;

  ${mediaQuery("smallScreens")} {
    margin-top: 0px;
  }
`;

const StyledSocialMedia = styled(SocialMedia)`
  position: absolute;
  right: 20px;
  top: 20px;

  ${mediaQuery("tinyScreens")} {
    right: 10px;
    top: 15px;
  }
`;

const LowerContainer = styled(Container)`
  align-items: flex-start;
  flex-direction: column;
  padding: 20px 5px;

  ${mediaQuery("tinyScreens")} {
    padding: 20px 0px;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 15px;

  ${mediaQuery("mediumScreens")} {
    gap: 20px;
  }
`;

const StyledHeading = styled(Heading)`
  padding-left: 15px;

  ${mediaQuery("smallScreens")} {
    padding-left: 10px;
  }
`;

export const Home: React.FC = () => {
  return (
    <ThinScreen>
      <Header />
      <UpperContainer>
        <Summary />
        <CVContainer>
          <CVCard />
        </CVContainer>
        <StyledSocialMedia />
      </UpperContainer>
      <LowerContainer>
        <StyledHeading text="Projects" />
        <ProjectContainer>
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
        </ProjectContainer>
      </LowerContainer>
    </ThinScreen>
  );
};
