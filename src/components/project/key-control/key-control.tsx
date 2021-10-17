import React from "react";

import { controlText } from "../../../lib";
import { classNames } from "../../../styling";
import { Card } from "../../shared";
import presets from "./key-control.module.scss";
import { KeyControlProps } from "./key-control.props";

export const KeyControl: React.FC<KeyControlProps> = (props) => {
  const {
    action,
    className,
    keys,
    callback,
    preset = "default",
    touchEnabled,
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
