import React from "react";

import Heading from "../../shared/heading";
import ControlInfo from "../controlInfo";
import KeyControl from "../keyControl";
import SliderControl from "../sliderControl";
import ToggleControl from "../toggleControl";
import presets from "./controls.module.scss";
import ControlsProps from "./controls.props";

// eslint-disable-next-line no-console
const tCallback = (state: boolean) => console.log(state);
// eslint-disable-next-line no-console
const sCallback = (value: number) => console.log(value);

const Controls: React.FC<ControlsProps> = (props) => {
  const { preset = "default", toggleFullScreen, ...rest } = props;

  return (
    <div {...rest} className={presets[preset]}>
      <Heading text="Controls" />
      <div>
        <KeyControl
          keys={["f"]}
          action="toggle fullscreen"
          callback={toggleFullScreen}
        />
        <ToggleControl action="toggle setting" set={tCallback} initialValue />
        <SliderControl name="Slider" callback={sCallback} initialValue={0.5} />
        <ControlInfo controls={["Point", "Click"]} action="erase" />
      </div>
    </div>
  );
};

export default Controls;
