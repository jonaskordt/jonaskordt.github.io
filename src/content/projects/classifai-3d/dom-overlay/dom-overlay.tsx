import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import { ClearIcon } from "../custom-controls";
import { Classifai3DDomOverlayProps } from "./classifai-3d-dom-overlay.props";

const overlayContainer = document.getElementById("ar-overlay")!;

const OverlayPortal: React.FC = ({ children }) => {
  return ReactDOM.createPortal(children, overlayContainer);
};

const Container = styled.div`
  left: 20px;
  position: absolute;
  top: 20px;
`;

export const Classifai3DDomOverlay: React.FC<Classifai3DDomOverlayProps> = (
  props,
) => {
  const { classifai3D, ...rest } = props;

  return (
    <OverlayPortal>
      <Container {...rest} onClick={classifai3D.exitAR} role="button">
        <ClearIcon />
      </Container>
    </OverlayPortal>
  );
};
