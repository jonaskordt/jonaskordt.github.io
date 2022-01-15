import React from "react";
import styled from "styled-components";

import { mediaQuery } from "../../../theme";
import { HeadingProps } from "./heading.props";

const BaseHeading = styled.h1`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 30px;

  ${mediaQuery("tinyScreens")} {
    font-size: 25px;
  }
`;

export const Heading: React.FC<HeadingProps> = (props) => {
  const { text, ...rest } = props;

  return <BaseHeading {...rest}>{text}</BaseHeading>;
};

export const CenteredHeading = styled(Heading)`
  text-align: center;
`;

export const SmallHeading = styled(Heading)`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;

  ${mediaQuery("tinyScreens")} {
    font-size: 18px;
  }
`;

export const SmallCenteredHeading = styled(SmallHeading)`
  text-align: center;
`;
