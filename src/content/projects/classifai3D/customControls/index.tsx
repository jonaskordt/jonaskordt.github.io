import React, { useEffect, useState } from "react";

import classNames from "../../../../styling";
import { Tool } from "../types";
import presets from "./classifai3DControls.module.scss";
import Classifai3DControlsProps from "./classifai3DControls.props";
import {
  ClearIcon,
  DeleteIcon,
  EraserIcon,
  InvertSelectionIcon,
  RedoIcon,
  SelectIcon,
  UndoIcon,
} from "./icons";

const tools = [Tool.Selection, Tool.Eraser];
const ToolIcons = [SelectIcon, EraserIcon];

const Classifai3DControls: React.FC<Classifai3DControlsProps> = (props) => {
  const { classifai3D, className, preset = "default" } = props;

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
    <div className={classNames(presets[preset], className)}>
      <div className={presets.toolBarContainer}>
        {classifai3D && (
          <div className={presets.toolBar}>
            <div className={presets.tool}>
              <UndoIcon onClick={classifai3D.undo} />
            </div>
            <div className={presets.tool}>
              <RedoIcon onClick={classifai3D.redo} />
            </div>
          </div>
        )}
      </div>
      <div className={presets.toolBarContainer}>
        {classifai3D && (
          <div className={presets.toolBar}>
            {tools.map((tool, index) => {
              const Icon = ToolIcons[index];
              return (
                <div
                  className={
                    tool === activeTool ? presets.activeTool : presets.tool
                  }
                  key={tool}
                >
                  <Icon
                    onClick={() => {
                      classifai3D.setActiveTool(tool);
                      setActiveTool(tool);
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
        {classifai3D && activeTool === Tool.Selection && (
          <div className={presets.selectionToolBar}>
            <div className={presets.tool}>
              <InvertSelectionIcon onClick={classifai3D.invertSelection} />
            </div>
            <div className={presets.tool}>
              <DeleteIcon onClick={classifai3D.deleteSelection} />
            </div>
            <div className={presets.tool}>
              <ClearIcon onClick={classifai3D.clearSelection} />
            </div>
          </div>
        )}
      </div>
      {classifai3D && aRAvailable && (
        <button onClick={classifai3D.enterAR} type="button">
          Enter AR
        </button>
      )}
    </div>
  );
};

export default Classifai3DControls;
