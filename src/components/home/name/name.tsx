import React from "react";
import styled from "styled-components";

import { mediaQuery } from "../../../theme";
import { NameProps } from "./name.props";

const NameDiv = styled.div`
  font-size: 50px;
  font-weight: 700;

  ${mediaQuery("tinyScreens")} {
    font-size: 45px;
  }
`;

export const Name: React.FC<NameProps> = (props) => {
  return <NameDiv {...props}>Jonas Kordt</NameDiv>;
};
