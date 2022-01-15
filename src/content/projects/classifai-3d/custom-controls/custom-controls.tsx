import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { Card } from "../../../../components/shared/card";
import { color, shadow } from "../../../../theme";
import { Tool } from "../types";
import { Classifai3DControlsProps } from "./classifai-3d-controls.props";
import {
  ClearIcon,
  DeleteIcon,
  EraserIcon,
  InvertSelectionIcon,
  RedoIcon,
  SelectIcon,
  UndoIcon,
} from "./icons";

const Container = styled.div`
  background-color: ${color("controlBackground")};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 15px;
  width: 250px;
  gap: 20px;
`;

const ToolBarContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const toolBarStyling = css`
  box-shadow: ${shadow("keyCard")};
  align-items: center;
  border-radius: 10px;
  display: flex;
  height: 20px;
  padding: 10px;

  :hover {
    box-shadow: ${shadow("keyCardHover")};
  }
`;

const ToolBar = styled.div`
  ${toolBarStyling}
`;

const ToolBarCard = styled(Card)`
  ${toolBarStyling}
`;

const StyledTool = styled.div<{ selected?: boolean }>`
  align-items: center;
  display: flex;
  height: 20px;
  justify-content: center;
  margin: 5px;
  width: 20px;

  * {
    fill: ${(props) => (props.selected ? "black" : "gray")};
  }

  :active {
  * {
    fill: darkgray;
  }
`;

const tools = [Tool.Selection, Tool.Eraser];
const ToolIcons = [SelectIcon, EraserIcon];

export const Classifai3DControls: React.FC<Classifai3DControlsProps> = (
  props,
) => {
  const { classifai3D, ...rest } = props;

  const [activeTool, setActiveTool] = useState<Tool>(Tool.Selection);

  const [aRAvailable, setARAvailable] = useState<boolean>(false);

  useEffect(() => {
    if ("xr" in navigator) {
      (navigator as THREE.Navigator)
        .xr!.isSessionSupported("immersive-ar")
        .then(setARAvailable)
        .catch(() => {});
    }
  }, [setARAvailable]);

  useEffect(() => {
    if (classifai3D) {
      document.addEventListener("keydown", (event: KeyboardEvent) => {
        switch (event.key.toLowerCase()) {
          case "e":
            setActiveTool(Tool.Eraser);
            classifai3D.setActiveTool(Tool.Eraser);
            break;
          case "q":
            setActiveTool(Tool.Selection);
            classifai3D.setActiveTool(Tool.Selection);
            break;
          default:
            break;
        }
      });
    }
  }, [setActiveTool, classifai3D]);

  return (
    <Container {...rest}>
      <ToolBarContainer>
        {classifai3D && (
          <ToolBar>
            <StyledTool>
              <UndoIcon onClick={classifai3D.undo} />
            </StyledTool>
            <StyledTool>
              <RedoIcon onClick={classifai3D.redo} />
            </StyledTool>
          </ToolBar>
        )}
      </ToolBarContainer>
      <ToolBarContainer>
        {classifai3D && (
          <ToolBar>
            {tools.map((tool, index) => {
              const Icon = ToolIcons[index];
              return (
                <StyledTool selected={tool === activeTool} key={tool}>
                  <Icon
                    onClick={() => {
                      classifai3D.setActiveTool(tool);
                      setActiveTool(tool);
                    }}
                  />
                </StyledTool>
              );
            })}
          </ToolBar>
        )}
        {classifai3D && activeTool === Tool.Selection && (
          <ToolBar>
            <StyledTool>
              <InvertSelectionIcon onClick={classifai3D.invertSelection} />
            </StyledTool>
            <StyledTool>
              <DeleteIcon onClick={classifai3D.deleteSelection} />
            </StyledTool>
            <StyledTool>
              <ClearIcon onClick={classifai3D.clearSelection} />
            </StyledTool>
          </ToolBar>
        )}
      </ToolBarContainer>
      {classifai3D && aRAvailable && (
        <ToolBarCard clickCallback={classifai3D.enterAR}>Enter AR</ToolBarCard>
      )}
    </Container>
  );
};
