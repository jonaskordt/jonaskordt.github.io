import React, { useCallback } from "react";
import styled from "styled-components";

import { DoiLinkProps } from "./doi-link.props";
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

export const DoiLink: React.FC<DoiLinkProps> = (props) => {
  const { doi, ...rest } = props;

  const doiLink = useCallback(() => {
    window.location.href = `https://doi.org/${doi}`;
  }, [doi]);

  return (
    <StyledCard {...rest} clickCallback={doiLink}>
      <StyledText>DOI</StyledText>
    </StyledCard>
  );
};
