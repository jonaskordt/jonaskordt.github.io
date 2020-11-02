import React from "react";

import Card from "../../shared/card";
import presets from "./keyControl.module.scss";
import KeyControlProps from "./keyControl.props";

const KeyControl: React.FC<KeyControlProps> = (props) => {
  const { action, keys, callback, preset = "default", ...rest } = props;

  const keyText = keys
    .map((key) => (key.length === 1 ? key.toUpperCase() : key))
    .join(" + ");

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
