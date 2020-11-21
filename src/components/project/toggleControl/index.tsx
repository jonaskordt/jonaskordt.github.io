import React, { useCallback, useState } from "react";

import classNames from "../../../styling";
import presets from "./toggleControl.module.scss";
import ToggleControlProps from "./toggleControl.props";

const ToggleControl: React.FC<ToggleControlProps> = (props) => {
  const {
    action,
    className,
    initialValue,
    callback,
    preset = "default",
    ...rest
  } = props;

  const [state, setState] = useState(initialValue);

  const onClick = useCallback(() => {
    callback(!state);
    setState(!state);
  }, [callback, state]);

  return (
    <div {...rest} className={classNames(presets[preset], className)}>
      <p className={presets.text}>{action}</p>
      <div className={presets.switch} onClick={onClick} role="button">
        <div
          className={state ? presets.background : presets.backgroundInactive}
        >
          <div className={presets.knub} />
        </div>
      </div>
    </div>
  );
};

export default ToggleControl;
