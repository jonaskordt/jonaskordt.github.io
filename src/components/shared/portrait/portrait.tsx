import React from "react";
import styled from "styled-components";

import { portraitImage } from "../../../content";
import { color, mediaQuery } from "../../../theme";
import { PortraitProps } from "./portrait.props";

const Container = styled.div<{ small?: boolean }>`
  height: ${(props) => (props.small ? "100px" : "150px")};
  width: ${(props) => (props.small ? "100px" : "150px")};

  ${mediaQuery("tinyScreens")} {
    height: 100px;
    width: 100px;
  }
`;

const StyledImg = styled.img<{ small?: boolean }>`
  border: 1px solid ${color("border")};
  border-radius: 50%;
  height: ${(props) => (props.small ? "100px" : "150px")};
  width: ${(props) => (props.small ? "100px" : "150px")};

  ${mediaQuery("tinyScreens")} {
    height: 100px;
    width: 100px;
  }
`;

export const Portrait: React.FC<PortraitProps> = (props) => {
  const { small = false, ...rest } = props;
  return (
    <Container small={small} {...rest}>
      <StyledImg small={small} src={portraitImage} alt="" />
    </Container>
  );
};
