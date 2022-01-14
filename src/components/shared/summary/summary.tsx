import React from "react";
import styled from "styled-components";

import { summaryFinisher, summaryHeading, summaryText } from "../../../content";
import { mediaQuery } from "../../../theme";
import { Heading } from "../heading";
import { SummaryProps } from "./summary.props";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 30px;
  text-align: justify;

  ${mediaQuery("tinyScreens")} {
    font-size: 18px;
    line-height: 25px;
  }

  @media (max-width: 1335px) {
    max-width: unset;
  }

  a {
    color: #0c0e1b;
  }
`;

const Finisher = styled.p`
  margin-top: 20px;
`;

export const Summary: React.FC<SummaryProps> = (props) => {
  const { isCV, ...rest } = props;
  return (
    <Container {...rest}>
      <Heading text={summaryHeading} />
      {summaryText}
      {isCV || <Finisher>{summaryFinisher}</Finisher>}
    </Container>
  );
};
