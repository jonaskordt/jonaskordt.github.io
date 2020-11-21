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
    ...rest
  } = props;

  const [toggleControls, sliderControls, mouseControls, keyControls] = controls;

  return (
    <div {...rest} className={classNames(presets[preset], className)}>
      <Heading text="Controls" />
      <div>
        <KeyControl
          keys={["f"]}
          action="toggle fullscreen"
          callback={toggleFullScreen}
        />
        {mouseControls.map((c) => (
          <ControlInfo key={c.action} {...c} />
        ))}
        {toggleControls.map((c) => (
          <ToggleControl key={c.action} {...c} />
        ))}
        {sliderControls.map((c) => (
          <SliderControl key={c.action} {...c} />
        ))}
        {keyControls.map((c) => (
          <KeyControl key={c.action} {...c} />
        ))}
      </div>
    </div>
  );
};

export default Controls;
