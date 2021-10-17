import React from "react";

import { classNames } from "../../../styling";
import presets from "./web-gl-canvas.module.scss";
import { WebGLCanvasProps } from "./web-gl-canvas.props";

export const WebGLCanvas = React.forwardRef<
  HTMLCanvasElement,
  WebGLCanvasProps
>((props, ref) => {
  const { className, preset = "default", ...rest } = props;

  return (
    <canvas
      {...rest}
      width={1}
      height={1}
      ref={ref}
      className={classNames(presets[preset], className)}
    />
  );
});
