import React from "react";
import styled from "styled-components";
import { color, shadow } from "../../../theme";

import { ProgressBarProps } from "./progress-bar.props";

const Container = styled.div`
  height: 10px;
  position: relative;
`;

const Bar = styled.div`
  border-radius: 5px;
  height: 10px;
  left: 0;
  position: absolute;
  top: 0;
`;

const Background = styled(Bar)`
  box-shadow: ${shadow("progress")};
  width: 100%;
`;

const Foreground = styled(Bar)<{ level: number }>`
  background-color: ${color("blue")};
  background-image: linear-gradient(
    to right,
    ${color("blue")} 33%,
    #7fb4c7 67%,
    #78a1e4
  );
  width: ${(props) => props.level * 100}%;
`;

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { level, ...rest } = props;

  return (
    <Container {...rest}>
      <Background />
      <Foreground level={level} />
    </Container>
  );
};
