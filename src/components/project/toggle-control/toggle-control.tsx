import React, { useCallback, useState } from "react";
import styled from "styled-components";

import { color, shadow } from "../../../theme";
import { FlexRow } from "../../shared";
import { ToggleControlProps } from "./toggle-control.props";

const Container = styled(FlexRow)`
  align-items: center;
  background-color: ${color("controlBackground")};
  border-radius: 10px;
  justify-content: space-between;
  padding: 15px;
`;

const Text = styled.p`
  font-size: 20px;
  margin-right: 10px;
`;

const SwitchContainer = styled.div`
  border-radius: 15px;
  cursor: pointer;
  height: 30px;
  position: relative;
  user-select: none;
  width: 50px;
  box-shadow: ${shadow("toggle")};
`;

const Background = styled.div<{ state: boolean }>`
  background-color: ${color("green")};
  border-radius: 15px;
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: ${(props) => (props.state ? "0px" : "20px")};
  top: 0px;
  transition: right linear 0.15s;
  box-shadow: ${shadow("toggleGreen")};
`;

const Knub = styled.div`
  background-color: ${color("background")};
  border-radius: 15px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  width: 30px;
`;

export const ToggleControl: React.FC<ToggleControlProps> = (props) => {
  const { action, initialValue, callback, ...rest } = props;

  const [state, setState] = useState(initialValue);

  const onClick = useCallback(() => {
    callback(!state);
    setState(!state);
  }, [callback, state]);

  return (
    <Container {...rest}>
      <Text>{action}</Text>
      <SwitchContainer onClick={onClick} role="button">
        <Background state={state}>
          <Knub />
        </Background>
      </SwitchContainer>
    </Container>
  );
};
