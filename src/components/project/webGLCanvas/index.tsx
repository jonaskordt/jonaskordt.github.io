import React from "react";

import presets from "./webGLCanvas.module.scss";
import WebGLCanvasProps from "./webGLCanvas.props";

const WebGLCanvas = React.forwardRef<HTMLCanvasElement, WebGLCanvasProps>(
  (props, ref) => {
    const { preset = "default", ...rest } = props;

    return (
      <canvas
        {...rest}
        width={1}
        height={1}
        ref={ref}
        className={presets[preset]}
      />
    );
  },
);

export default WebGLCanvas;
