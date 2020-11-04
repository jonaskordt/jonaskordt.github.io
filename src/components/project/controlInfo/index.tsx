import React from "react";

import controlText from "../../../lib/utils/controlText";
import presets from "./controlInfo.module.scss";
import ControlInfoProps from "./controlInfo.props";

const ControlInfo: React.FC<ControlInfoProps> = (props) => {
  const { action, controls, preset = "default", ...rest } = props;

  const cText = controlText(controls);

  return (
    <div {...rest} className={presets[preset]}>
      <p className={presets.controls}>{cText}</p>
      <p className={presets.action}>to {action}</p>
    </div>
  );
};

export default ControlInfo;
