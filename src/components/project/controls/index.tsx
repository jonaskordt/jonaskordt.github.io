import React from "react";

import classNames from "../../../styling";
import Heading from "../../shared/heading";
import ControlInfo from "../controlInfo";
import KeyControl from "../keyControl";
import SliderControl from "../sliderControl";
import ToggleControl from "../toggleControl";
import presets from "./controls.module.scss";
import ControlsProps from "./controls.props";

const Controls: React.FC<ControlsProps> = (props) => {
  const {
    className,
    preset = "default",
    toggleFullScreen,
    controls,
    children,
    ...rest
  } = props;

  const [toggleControls, sliderControls, mouseControls, keyControls] = controls;

  return (
    <div {...rest} className={classNames(presets[preset], className)}>
      <Heading text="Controls" />
      <div className={presets.scrollableContainer}>
        <KeyControl
          className={presets.control}
          keys={["f"]}
          action="toggle fullscreen"
          callback={toggleFullScreen}
        />
        {children}
        {mouseControls.map((c) => (
          <ControlInfo className={presets.control} key={c.action} {...c} />
        ))}
        {toggleControls.map((c) => (
          <ToggleControl className={presets.control} key={c.action} {...c} />
        ))}
        {sliderControls.map((c) => (
          <SliderControl className={presets.control} key={c.action} {...c} />
        ))}
        {keyControls.map((c) => (
          <KeyControl className={presets.control} key={c.action} {...c} />
        ))}
      </div>
    </div>
  );
};

export default Controls;
