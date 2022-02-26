import React from "react";
import styled from "styled-components";

import { FlexRow } from "../flex";
import { Card } from "../card";
import { gitHubIcon, linkedInIcon, twitterIcon } from "./icons";
import { SocialMediaProps } from "./social-media.props";
import { mediaQuery } from "../../../theme";

const Container = styled(FlexRow)`
  height: 45px;
  justify-content: flex-end;

  ${mediaQuery("tinyScreens")} {
    height: 40px;
  }
`;

const StyledCard = styled(Card)`
  border-radius: 10px;
  height: 25px;
  margin-left: 10px;
  padding: 10px;
  width: 25px;

  ${mediaQuery("tinyScreens")} {
    height: 20px;
    width: 20px;
  }
`;

const StyledImg = styled.img`
  height: 25px;

  ${mediaQuery("tinyScreens")} {
    height: 20px;
  }
`;

export const SocialMedia: React.FC<SocialMediaProps> = (props) => {
  return (
    <Container {...props}>
      <StyledCard link="https://www.linkedin.com/in/jonaskordt/">
        <StyledImg src={linkedInIcon} alt="" />
      </StyledCard>
      <StyledCard link="https://github.com/jonaskordt">
        <StyledImg src={gitHubIcon} alt="" />
      </StyledCard>
      <StyledCard link="https://twitter.com/oJonasss">
        <StyledImg src={twitterIcon} alt="" />
      </StyledCard>
    </Container>
  );
};
