import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

import { preventDefault } from "../../../lib";
import { FlexColumn } from "../../shared";
import { color, shadow } from "../../../theme";
import { SliderControlProps } from "./slider-control.props";

const Container = styled(FlexColumn)`
  background-color: ${color("controlBackground")};
  border-radius: 10px;
  padding: 15px;
`;

const Text = styled.p`
  font-size: 20px;
  margin-right: 10px;
`;

const Track = styled.div`
  background-color: ${color("background")};
  border-radius: 4px;
  cursor: pointer;
  height: 8px;
  margin-top: 10px;
  position: relative;
  transition: box-shadow linear 0.1s;
  box-shadow: ${shadow("slider")};

  hover: {
    box-shadow: ${shadow("sliderHover")};
  }
`;

const TrackFiller = styled.div<{ normalizedValue: number }>`
  background-color: ${color("green")};
  border-radius: inherit;
  bottom: 0;
  left: 0;
  right: ${(props) => `${(1 - props.normalizedValue) * 100}`}%;
  position: absolute;
  top: 0;
`;

const KnubWrapper = styled.div<{ normalizedValue: number }>`
  position: absolute;
  top: 50%;
  right: ${(props) => `${(1 - props.normalizedValue) * 100}`}%;
`;

const Knub = styled.div`
  background-color: ${color("background")};
  border: solid ${color("green")} 3px;
  border-radius: 10px;
  height: 14px;
  left: -10px;
  position: absolute;
  top: -10px;
  width: 14px;
`;

export const SliderControl: React.FC<SliderControlProps> = (props) => {
  const {
    action,
    callback,
    min = 0,
    max = 1,
    step = 0.01,
    initialValue,
    logarithmic = false,
    ...rest
  } = props;

  const [normalizedValue, setNormalizedValue] = useState(
    (initialValue - min) / (max - min),
  );

  const trackRef = useRef<HTMLDivElement>(null);

  const calculateNormalizedPosition = useCallback(
    (e: PointerEvent) => {
      if (!trackRef.current) return 0;

      const boundingBox = trackRef.current.getBoundingClientRect();
      return Math.max(
        0,
        Math.min(1, (e.clientX - boundingBox.left) / boundingBox.width),
      );
    },
    [trackRef],
  );

  const updateKnub = useCallback(
    (e: PointerEvent) => {
      const steps = (max - min) / step;
      const selectedStep = Math.round(steps * calculateNormalizedPosition(e));
      const stepPosition = (selectedStep * step) / (max - min);

      if (stepPosition !== normalizedValue) {
        const selectedValue = selectedStep * step + min;
        if (logarithmic) {
          callback(Math.exp(selectedValue));
        } else {
          callback(selectedValue);
        }
        setNormalizedValue(stepPosition);
      }
    },
    [
      min,
      max,
      step,
      calculateNormalizedPosition,
      normalizedValue,
      callback,
      logarithmic,
    ],
  );

  const onMove = preventDefault(updateKnub);

  const onEnd = useCallback(() => {
    document.removeEventListener("pointermove", onMove);
    document.removeEventListener("pointerup", onEnd);
    document.removeEventListener("pointerleave", onEnd);
  }, [onMove]);

  const onStart = useCallback(
    (e: PointerEvent) => {
      document.addEventListener("pointermove", onMove);
      document.addEventListener("pointerup", onEnd);
      document.addEventListener("pointerleave", onEnd);
      onMove(e);
    },
    [onMove, onEnd],
  );

  return (
    <Container {...rest}>
      <Text>{action}</Text>
      <Track
        role="button"
        onPointerDown={
          onStart as unknown as (e: React.PointerEvent<HTMLDivElement>) => void
        }
        ref={trackRef}
      >
        <TrackFiller normalizedValue={normalizedValue} />
        <KnubWrapper normalizedValue={normalizedValue}>
          <Knub />
        </KnubWrapper>
      </Track>
    </Container>
  );
};
