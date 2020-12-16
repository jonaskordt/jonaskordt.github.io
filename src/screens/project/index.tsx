import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import Controls from "../../components/project/controls";
import WebGLCanvas from "../../components/project/webGLCanvas";
import Header from "../../components/shared/header";
import Heading from "../../components/shared/heading";
import Screen from "../../components/shared/screen";
import { customControls, projects } from "../../content";
import CanvasController from "../../content/projects/default";
import { noControls } from "../../lib/types/controls";
import presets from "./project.module.scss";

interface IProjectParams {
  projectId: string;
}

let canvasController: CanvasController | undefined;

const Project: React.FC = () => {
  const { projectId } = useParams<IProjectParams>();
  const project = projects[projectId];
  const CustomControls = customControls[projectId];

  /* Canvas Controller */

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Since canvasController is volatile state we trick React to force
  // an update once the effect has created it by assigning a new object
  // as state through forceUpdate
  const [, forceUpdate] = useState({});
  useEffect(() => {
    if (canvasRef.current && project) {
      canvasController = new project.CanvasController(canvasRef.current);

      // Here we asign the new object to force the update
      forceUpdate({});
    }
    return () => {
      canvasController?.dispose();
    };
  }, [project]);

  /* Canvas Controller End */

  /* Full Screen */

  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = useCallback(() => {
    setFullScreen(!fullScreen);
  }, [fullScreen]);

  const handleKeyEvent = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "f") toggleFullScreen();
    },
    [toggleFullScreen],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyEvent);
    return () => document.removeEventListener("keydown", handleKeyEvent);
  }, [handleKeyEvent]);

  /* Full Screen End */

  /* Custom Controls */

  const customControlsProps: {
    [propName: string]: CanvasController | undefined;
  } = {};
  customControlsProps[projectId] = canvasController;

  /* Custom Controls End */

  return (
    <Screen preset="fullHeight">
      <Header preset="thin" />
      {project ? (
        <div className={presets.container}>
          <Heading preset="centered" text={project.name} />
          <div className={presets.grid}>
            <div className={presets.controlsContainer}>
              <Controls
                toggleFullScreen={toggleFullScreen}
                controls={canvasController?.controls || noControls}
              >
                {CustomControls && <CustomControls {...customControlsProps} />}
              </Controls>
            </div>
            <div
              className={
                fullScreen ? presets.fullScreen : presets.canvasContainer
              }
            >
              <WebGLCanvas
                ref={canvasRef}
                preset={fullScreen ? "fullScreen" : undefined}
              />
            </div>
            <p className={presets.text}>{project.summary}</p>
          </div>
        </div>
      ) : (
        <div className={presets.container}>
          <p>Project {projectId} doesn&apos;t exist yet.</p>
        </div>
      )}
    </Screen>
  );
};

export default Project;
