import React from "react";

import controlText from "../../../lib/utils/controlText";
import classNames from "../../../styling";
import Card from "../../shared/card";
import presets from "./keyControl.module.scss";
import KeyControlProps from "./keyControl.props";

const KeyControl: React.FC<KeyControlProps> = (props) => {
  const {
    action,
    className,
    keys,
    callback,
    preset = "default",
    ...rest
  } = props;

  const keyText = controlText(keys);

  return (
    <div className={classNames(presets[preset], className)}>
      <Card {...rest} clickCallback={callback} className={presets.keyCard}>
        <p className={presets.keys}>{keyText}</p>
      </Card>
      <p className={presets.action}>to {action}</p>
    </div>
  );
};

export default KeyControl;
