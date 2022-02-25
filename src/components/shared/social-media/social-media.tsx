import React, { useCallback } from "react";
import styled from "styled-components";

import { FlexRow } from "../flex";
import { Card } from "../card";
import { gitHubIcon, linkedInIcon, twitterIcon } from "./icons";
import { SocialMediaProps } from "./social-media.props";
import { mediaQuery } from "../../../theme";

const Container = styled(FlexRow)`
  height: 50px;
  justify-content: flex-end;

  ${mediaQuery("tinyScreens")} {
    height: 40px;
  }
`;

const StyledCard = styled(Card)`
  border-radius: 10px;
  height: 30px;
  margin-left: 15px;
  padding: 10px;
  width: 30px;

  ${mediaQuery("tinyScreens")} {
    height: 20px;
    margin-left: 10px;
    width: 20px;
  }
`;

const StyledImg = styled.img`
  height: 30px;
  ${mediaQuery("tinyScreens")} {
    height: 20px;
  }
`;

export const SocialMedia: React.FC<SocialMediaProps> = (props) => {
  const gitHubLink = useCallback(() => {
    window.location.href = "https://github.com/jonaskordt";
  }, []);

  const twitterLink = useCallback(() => {
    window.location.href = "https://twitter.com/oJonasss";
  }, []);

  const linkedInLink = useCallback(() => {
    window.location.href = "https://www.linkedin.com/in/jonaskordt/";
  }, []);

  return (
    <Container {...props}>
      <StyledCard clickCallback={linkedInLink}>
        <StyledImg src={linkedInIcon} alt="" />
      </StyledCard>
      <StyledCard clickCallback={gitHubLink}>
        <StyledImg src={gitHubIcon} alt="" />
      </StyledCard>
      <StyledCard clickCallback={twitterLink}>
        <StyledImg src={twitterIcon} alt="" />
      </StyledCard>
    </Container>
  );
};
