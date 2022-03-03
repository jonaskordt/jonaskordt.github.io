import React from "react";
import styled from "styled-components";

import { generalSkills, languages, techSkills } from "../../../content";
import { color, mediaQuery } from "../../../theme";
import { FlexRow, Heading } from "../../shared";
import { Skill } from "../skill";
import { QuickInfoProps } from "./quick-info.props";

const Container = styled(FlexRow)`
  border-radius: 10px;

  ${mediaQuery("smallerScreens")} {
    flex-direction: column;
  }
`;

const Section = styled.div`
  background-color: ${color("cvBackground")};
  border-radius: 10px;
  padding: 15px;
  padding-bottom: 0px;
`;

const WideSection = styled(Section)`
  flex-grow: 2;
  flex-basis: 1px;
`;

const GeneralSkillsSection = styled(Section)`
  flex-shrink: 0;
  margin: 0px 20px;
  padding-bottom: 5px;

  ${mediaQuery("smallerScreens")} {
    margin: 20px 0px;
  }
`;

const SectionHeading = styled(Heading)`
  font-size: 20px;
  margin-bottom: 0;
  margin-bottom: 20px;
`;

const GeneralSkillsContainer = styled.div`
  margin: 0 !important;

  ${mediaQuery("smallerScreens")} {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-evenly; */
  }
`;

const GeneralSkill = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;

  ${mediaQuery("smallerScreens")} {
    flex-grow: 1;
    flex-shrink: 0;
    width: 213px;
  }
`;

const BarSkill = styled(Skill)`
  margin-bottom: 15px;
`;

export const QuickInfo: React.FC<QuickInfoProps> = (props) => {
  return (
    <Container {...props}>
      <WideSection>
        <SectionHeading text="Languages" />
        {languages.map((s) => (
          <BarSkill key={s.name} {...s} />
        ))}
      </WideSection>

      <GeneralSkillsSection>
        <SectionHeading text="Skills" />
        <GeneralSkillsContainer>
          {generalSkills.map((s) => (
            <GeneralSkill key={s}>{s}</GeneralSkill>
          ))}
        </GeneralSkillsContainer>
      </GeneralSkillsSection>

      <WideSection>
        <SectionHeading text="Tech" />
        {techSkills.map((s) => (
          <BarSkill key={s.name} {...s} />
        ))}
      </WideSection>
    </Container>
  );
};
