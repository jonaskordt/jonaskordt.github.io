import React, { useCallback } from "react";
import styled from "styled-components";

import { PdfLinkProps } from "./pdf-link.props";
import { Card } from "../../shared";
import { mediaQuery } from "../../../theme";

const StyledCard = styled(Card)`
  border-radius: 10px;
  height: 30px;
  margin-left: 7px;
  margin-right: 7px;
  padding: 5px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-content: center;

  ${mediaQuery("tinyScreens")} {
    height: 20px;
    margin-left: 10px;
    width: 20px;
  }
`;

const StyledText = styled.p`
  font-size: 13.5px;
  font-weight: 600;
  text-align: center;
  width: 100%;

  ${mediaQuery("tinyScreens")} {
    font-size: 10px;
  }
`;

export const PdfLink: React.FC<PdfLinkProps> = (props) => {
  const { pdfName, ...rest } = props;

  const link = useCallback(() => {
    window.location.href = `${`${
      window.location.href.split("#")[0]
    }pdf/${pdfName}`}.pdf`;
  }, [pdfName]);

  return (
    <StyledCard {...rest} clickCallback={link}>
      <StyledText>PDF</StyledText>
    </StyledCard>
  );
};
