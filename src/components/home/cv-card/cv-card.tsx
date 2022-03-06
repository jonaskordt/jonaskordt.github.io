import React from "react";

import styled from "styled-components";
import { Card } from "../../shared";
import cvImg from "./cv.png";
import { CVCardProps } from "./cv-card.props";

const StyledImg = styled.img`
  height: auto;
  margin-bottom: 10px;
  margin-right: 35px;
  width: 265px;
`;

const COHeader = styled.p`
  font-size: small;
  margin-bottom: 5px;
  opacity: 0.3;
`;

export const CVCard: React.FC<CVCardProps> = (props) => {
  return (
    <Card to="/cv" {...props}>
      <StyledImg src={cvImg} alt="" />
      <COHeader>Current Occupation:</COHeader>
      <p>M.Sc. IT Systems Engineering at HPI</p>
    </Card>
  );
};
