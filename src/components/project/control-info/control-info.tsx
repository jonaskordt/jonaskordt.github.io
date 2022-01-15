import React from "react";
import styled from "styled-components";

import { controlText } from "../../../lib";
import { FlexRow } from "../../shared";
import { color } from "../../../theme";
import { ControlInfoProps } from "./control-info.props";

const Container = styled(FlexRow)`
  align-items: center;
  background-color: ${color("controlBackground")};
  border-radius: 10px;
  padding: 15px;
`;

const Text = styled.p`
  font-size: 20px;
`;

const ControlsText = styled(Text)`
  flex-shrink: 0;
  font-weight: 700;
  max-width: 125px;
`;

const ActionText = styled(Text)`
  padding-left: 6px;
`;

export const ControlInfo: React.FC<ControlInfoProps> = (props) => {
  const { action, controls, ...rest } = props;

  const cText = controlText(controls);

  return (
    <Container {...rest}>
      <ControlsText>{cText}</ControlsText>
      <ActionText>to {action}</ActionText>
    </Container>
  );
};
