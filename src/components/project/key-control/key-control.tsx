import React from "react";
import styled from "styled-components";

import { controlText } from "../../../lib";
import { color, shadow } from "../../../theme";
import { Card, FlexRow } from "../../shared";
import { KeyControlProps } from "./key-control.props";

const Container = styled(FlexRow)`
  align-items: center;
  background-color: ${color("controlBackground")};
  border-radius: 10px;
  gap: 10px;
  padding: 15px;
`;

const Text = styled.p`
  font-size: 20px;
`;

const Keys = styled(Text)`
  font-weight: 700;
`;

const KeyCard = styled(Card)`
  box-shadow: ${shadow("keyCard")};
  border-radius: 10px;
  padding: 5px 10px;

  :hover {
    box-shadow: ${shadow("keyCardHover")};
  }
  :active {
    box-shadow: ${shadow("keyCardActive")};
  }
`;

export const KeyControl: React.FC<KeyControlProps> = (props) => {
  const { action, keys, callback, touchEnabled, ...rest } = props;

  const keyText = controlText(keys);

  return (
    <Container {...rest}>
      <KeyCard clickCallback={callback}>
        <Keys>{keyText}</Keys>
      </KeyCard>
      <Text>to {action}</Text>
    </Container>
  );
};
