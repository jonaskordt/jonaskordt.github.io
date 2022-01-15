import React from "react";
import styled from "styled-components";

import { color } from "../../../theme";
import { WebGLCanvasProps } from "./web-gl-canvas.props";

const StyledCanvas = styled.canvas<{ border: boolean }>`
  border: ${(props) =>
    props.border ? `solid ${color("border")} 1px` : "none"};
  border-radius: ${(props) => (props.border ? "20px" : "0px")};
  cursor: crosshair;

  :focus {
    outline: none;
  }
`;

export const WebGLCanvas = React.forwardRef<
  HTMLCanvasElement,
  WebGLCanvasProps
>((props, ref) => {
  const { className, border = true, ...rest } = props;

  return (
    <StyledCanvas {...rest} border={border} width={1} height={1} ref={ref} />
  );
});
