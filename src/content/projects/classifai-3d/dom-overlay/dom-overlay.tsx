import React from "react";
import ReactDOM from "react-dom";

import { classNames } from "../../../../styling";
import { ClearIcon } from "../custom-controls";
import presets from "./classifai-3d-dom-overlay.module.scss";
import { Classifai3DDomOverlayProps } from "./classifai-3d-dom-overlay.props";

const overlayContainer = document.getElementById("ar-overlay")!;

const OverlayPortal: React.FC = ({ children }) => {
  return ReactDOM.createPortal(children, overlayContainer);
};

export const Classifai3DDomOverlay: React.FC<Classifai3DDomOverlayProps> = (
  props,
) => {
  const { classifai3D, preset = "default", className, ...rest } = props;

  return (
    <OverlayPortal>
      <div
        {...rest}
        className={classNames(presets[preset], className)}
        onClick={classifai3D.exitAR}
        role="button"
      >
        <ClearIcon />
      </div>
    </OverlayPortal>
  );
};
