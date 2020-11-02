import React, { useCallback, useState } from "react";

import presets from "./toggleControl.module.scss";
import ToggleControlProps from "./toggleControl.props";

const ToggleControl: React.FC<ToggleControlProps> = (props) => {
  const { action, initialValue, set, preset = "default", ...rest } = props;

  const [state, setState] = useState(initialValue);

  const onClick = useCallback(() => {
    set(!state);
    setState(!state);
  }, [set, state]);

  return (
    <div {...rest} className={presets[preset]} onClick={onClick} role="button">
      <p className={presets.text}>{action}</p>
      <div className={presets.switch}>
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
