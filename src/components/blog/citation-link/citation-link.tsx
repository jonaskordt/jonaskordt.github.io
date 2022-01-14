import React from "react";
import styled from "styled-components";

import { CiatationLinkProps } from "./ciatation-link.props";

const StyledLink = styled.a`
  color: inherit;

  :link {
    text-decoration: none;
  }
  :visited {
    text-decoration: none;
  }
  :hover {
    text-decoration: underline;
  }
  :active {
    text-decoration: underline;
  }
`;

export const CitationLink: React.FC<CiatationLinkProps> = (props) => {
  const { link, ...rest } = props;

  return (
    <StyledLink href={link} target="_blank" rel="noopener noreferrer" {...rest}>
      {link}
    </StyledLink>
  );
};
