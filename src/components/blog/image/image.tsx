import React from "react";

import styled from "styled-components";
import { ImageProps } from "./image.props";
import { FlexColumn } from "../../shared";

const StyledImage = styled.img<{ hasSubtitle?: boolean }>`
  width: 100%;
  height: auto;
  margin-bottom: ${(props) => (props.hasSubtitle ? "10px" : "0")};
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
    <FlexColumn>
      <StyledImage
        hasSubtitle={Boolean(subtitle)}
        src={image}
        alt=""
        {...rest}
      />
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </FlexColumn>
  );
};

export const RoundedImage = styled(Image)`
  border-radius: 15px;
`;
