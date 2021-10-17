import React, { useState } from "react";

import { ControlMode } from "../../../lib";
import { classNames } from "../../../styling";
import { MouseIcon, TouchIcon } from "../../../theme";
import { Heading } from "../../shared";
import { ControlInfo } from "../control-info";
import { KeyControl } from "../key-control";
import { SliderControl } from "../slider-control";
import { ToggleControl } from "../toggle-control";
import presets from "./controls.module.scss";
import { ControlsProps } from "./controls.props";

export const Controls: React.FC<ControlsProps> = (props) => {
  const {
    className,
    preset = "default",
    toggleFullScreen,
    controls,
    children,
    ...rest
  } = props;

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
    <div {...rest} className={classNames(presets[preset], className)}>
      <div className={presets.controlHeadingContainer}>
        <Heading text="Controls" />
        <div className={presets.controlModeContainer}>
          <div
            className={
              controlMode === ControlMode.MOUSE
                ? presets.activeIcon
                : presets.icon
            }
          >
            <MouseIcon onClick={() => setControlMode(ControlMode.MOUSE)} />
          </div>
          <div
            className={
              controlMode === ControlMode.TOUCH
                ? presets.activeIcon
                : presets.icon
            }
          >
            <TouchIcon onClick={() => setControlMode(ControlMode.TOUCH)} />
          </div>
        </div>
      </div>
      <div className={presets.scrollableContainer}>
        <KeyControl
          className={presets.control}
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
          <ControlInfo className={presets.control} key={c.action} {...c} />
        ))}
        {toggleControls.map((c) => (
          <ToggleControl className={presets.control} key={c.action} {...c} />
        ))}
        {sliderControls.map((c) => (
          <SliderControl className={presets.control} key={c.action} {...c} />
        ))}
        {keyControls.map(
          (c) =>
            (controlMode === ControlMode.MOUSE || c.touchEnabled) && (
              <KeyControl className={presets.control} key={c.action} {...c} />
            ),
        )}
      </div>
    </div>
  );
};
