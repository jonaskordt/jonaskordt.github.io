import React from "react";

import styled from "styled-components";
import { ImageProps } from "./image.props";
import { FlexColumn } from "../../shared";

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 15px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-style: italic;
  font-size: 18px;
  line-height: 18px;
`;

export const Image: React.FC<ImageProps> = (props) => {
  const { image, subtitle, ...rest } = props;

  return (
    <FlexColumn {...rest}>
      <StyledImg src={image} alt="" />
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </FlexColumn>
  );
};
