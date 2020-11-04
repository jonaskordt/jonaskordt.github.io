import React from "react";

import Heading from "../../shared/heading";
import KeyControl from "../keyControl";
import SliderControl from "../sliderControl";
import ToggleControl from "../toggleControl";
import presets from "./controls.module.scss";
import ControlsProps from "./controls.props";

// eslint-disable-next-line no-console
const fCallback = () => console.log("F");
// eslint-disable-next-line no-console
const tCallback = (state: boolean) => console.log(state);
// eslint-disable-next-line no-console
const sCallback = (value: number) => console.log(value);

const Controls: React.FC<ControlsProps> = (props) => {
  const { preset = "default", ...rest } = props;

  return (
    <div {...rest} className={presets[preset]}>
      <Heading text="Controls" />
      <KeyControl
        keys={["f"]}
        action="toggle fullscreen"
        callback={fCallback}
      />
      <ToggleControl action="toggle setting" set={tCallback} initialValue />
      <SliderControl name="Slider" callback={sCallback} initialValue={0.5} />
    </div>
  );
};

export default Controls;
