import React from "react";

import Heading from "../../shared/heading";
import KeyControl from "../keyControl";
import presets from "./controls.module.scss";
import ControlsProps from "./controls.props";

// eslint-disable-next-line no-console
const fCallback = () => console.log("F");

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
      <KeyControl
        keys={["f"]}
        action="toggle fullscreen"
        callback={fCallback}
      />
    </div>
  );
};

export default Controls;
