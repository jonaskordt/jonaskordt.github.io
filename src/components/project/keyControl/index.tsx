import React from "react";

import controlText from "../../../lib/utils/controlText";
import Card from "../../shared/card";
import presets from "./keyControl.module.scss";
import KeyControlProps from "./keyControl.props";

const KeyControl: React.FC<KeyControlProps> = (props) => {
  const { action, keys, callback, preset = "default", ...rest } = props;

  const keyText = controlText(keys);

  return (
    <div className={presets[preset]}>
      <Card {...rest} clickCallback={callback} preset="keyControl">
        <p className={presets.keys}>{keyText}</p>
      </Card>
      <p className={presets.action}>to {action}</p>
    </div>
  );
};

export default KeyControl;
