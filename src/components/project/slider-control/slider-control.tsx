import React, { useCallback, useRef, useState } from "react";

import { preventDefault } from "../../../lib";
import { classNames } from "../../../styling";
import presets from "./slider-control.module.scss";
import { SliderControlProps } from "./slider-control.props";

export const SliderControl: React.FC<SliderControlProps> = (props) => {
  const {
    action,
    callback,
    className,
    min = 0,
    max = 1,
    step = 0.01,
    initialValue,
    preset = "default",
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
    <div {...rest} className={classNames(presets[preset], className)}>
      <p className={presets.text}>{action}</p>
      <div
        className={presets.track}
        role="button"
        onPointerDown={
          (onStart as unknown) as (
            e: React.PointerEvent<HTMLDivElement>,
          ) => void
        }
        ref={trackRef}
      >
        <div
          className={presets.trackFiller}
          style={{ right: `${(1 - normalizedValue) * 100}%` }}
        />
        <div
          className={presets.knubWrapper}
          style={{ left: `${normalizedValue * 100}%` }}
        >
          <div className={presets.knub} />
        </div>
      </div>
    </div>
  );
};
