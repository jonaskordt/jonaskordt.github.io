import React, { useState } from "react";
import styled, { css } from "styled-components";

import { ControlMode } from "../../../lib";
import { color, MouseIcon, shadow, TouchIcon } from "../../../theme";
import { FlexColumn, FlexRow, Heading } from "../../shared";
import { ControlInfo } from "../control-info";
import { KeyControl } from "../key-control";
import { SliderControl } from "../slider-control";
import { ToggleControl } from "../toggle-control";
import { ControlsProps } from "./controls.props";

const Container = styled(FlexColumn)`
  max-height: 100%;

  // Firefox scrollbar
  scrollbar-color: ${color("controlBackground")} ${color("background")};
  scrollbar-width: thin;

  user-select: none;
`;

const ScrollableContainer = styled(FlexColumn)`
  overflow-x: hidden;
  overflow-y: auto;
  padding-right: 20px;
  gap: 15px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${color("background")};
    border-radius: 5px;

    box-shadow: ${shadow("scroll")};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${color("controlBackground")};
    border-radius: 5px;
  }
`;

const ControlHeadingContainer = styled(FlexRow)`
  align-items: stretch;
  min-height: 60px;
`;

const ControlModeContainer = styled(FlexRow)`
  flex-grow: 1;
  justify-content: flex-end;
  padding-right: 20px;
  padding-top: 5px;
`;

const IconContainer = styled(FlexRow)`
  align-items: center;
  height: 25px;
  justify-content: center;
  margin: 5px;
  width: 25px;
`;

const ActivatableMouseIcon = styled(MouseIcon)<{ selected?: boolean }>`
  * {
    fill: ${(props) => (props.selected ? "black" : "darkgray")};
  }
`;
const ActivatableTouchIcon = styled(TouchIcon)<{ selected?: boolean }>`
  * {
    fill: ${(props) => (props.selected ? "black" : "darkgray")};
  }
`;

const controlStyles = css`
  flex-shrink: 0;
  width: 250px;
`;
const StyledKeyControl = styled(KeyControl)`
  ${controlStyles}
`;
const StyledControlInfo = styled(ControlInfo)`
  ${controlStyles}
`;
const StyledToggleControl = styled(ToggleControl)`
  ${controlStyles}
`;
const StyledSliderControl = styled(SliderControl)`
  ${controlStyles}
`;

export const Controls: React.FC<ControlsProps> = (props) => {
  const { toggleFullScreen, controls, children, ...rest } = props;

  const [
    toggleControls,
    sliderControls,
    [mouseControls, touchControls],
    keyControls,
  ] = controls;

  const [controlMode, setControlMode] = useState<ControlMode>(
    ControlMode.MOUSE,
  );

  return (
    <Container {...rest}>
      <ControlHeadingContainer>
        <Heading text="Controls" />
        <ControlModeContainer>
          <IconContainer>
            <ActivatableMouseIcon
              selected={controlMode === ControlMode.MOUSE}
              onClick={() => setControlMode(ControlMode.MOUSE)}
            />
          </IconContainer>
          <IconContainer>
            <ActivatableTouchIcon
              selected={controlMode === ControlMode.TOUCH}
              onClick={() => setControlMode(ControlMode.TOUCH)}
            />
          </IconContainer>
        </ControlModeContainer>
      </ControlHeadingContainer>
      <ScrollableContainer>
        <StyledKeyControl
          keys={["f"]}
          action="toggle fullscreen"
          callback={toggleFullScreen}
          touchEnabled
        />
        {children}
        {(controlMode === ControlMode.MOUSE
          ? mouseControls
          : touchControls
        ).map((c) => (
          <StyledControlInfo key={c.action} {...c} />
        ))}
        {toggleControls.map((c) => (
          <StyledToggleControl key={c.action} {...c} />
        ))}
        {sliderControls.map((c) => (
          <StyledSliderControl key={c.action} {...c} />
        ))}
        {keyControls.map(
          (c) =>
            (controlMode === ControlMode.MOUSE || c.touchEnabled) && (
              <StyledKeyControl key={c.action} {...c} />
            ),
        )}
      </ScrollableContainer>
    </Container>
  );
};
