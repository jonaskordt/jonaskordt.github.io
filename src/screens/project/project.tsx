import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Controls,
  WebGLCanvas,
  Header,
  Heading,
  Screen,
} from "../../components";
import {
  customControls,
  projects,
  Classifai3D,
  Classifai3DDomOverlay,
  CrosshairIcon,
  CanvasController,
} from "../../content";
import { noControls } from "../../lib";
import { XIcon } from "../../theme";
import presets from "./project.module.scss";

interface IProjectParams {
  projectId: string;
}

let canvasController: CanvasController | undefined;

export const Project: React.FC = () => {
  const { projectId } = useParams<IProjectParams>();
  const project = projects[projectId];
  const CustomControls = customControls[projectId];

  /* Canvas Controller */

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Since canvasController is volatile state we trick React to force
  // an update once the effect has created it by assigning a new object
  // as state through forceUpdate
  const [, forceUpdateHelper] = useState({});
  const forceUpdate = useCallback(() => {
    // Here we asign the new object to force the update
    forceUpdateHelper({});
  }, [forceUpdateHelper]);

  useEffect(() => {
    if (canvasRef.current && project) {
      canvasController = new project.CanvasController(
        canvasRef.current,
        forceUpdate,
      );

      forceUpdate();
    }
    return () => {
      canvasController?.dispose();
    };
  }, [project, forceUpdate]);

  /* Canvas Controller End */

  /* Full Screen */

  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullScreen = useCallback(() => {
    setFullScreen(!fullScreen);
    window.scrollTo(0, 0);
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

  /* Canvas Border */

  const noCanvasBorder =
    fullScreen ||
    (canvasController instanceof Classifai3D && canvasController.arActive);

  /* Canvas Border End */

  return (
    <Screen preset="fullHeight">
      <Header preset="thin" />
      {project ? (
        <>
          <div className={presets.container}>
            <Heading preset="centered" text={project.name} />
            <div className={presets.grid}>
              <div
                className={
                  fullScreen ? presets.fullScreen : presets.canvasContainer
                }
              >
                <WebGLCanvas
                  ref={canvasRef}
                  preset={noCanvasBorder ? "noBorder" : undefined}
                />
                {projectId === "classifai3D" && (
                  <div
                    className={presets.crosshairPointer}
                    id="crosshairPointer"
                  >
                    <CrosshairIcon />
                  </div>
                )}
                {fullScreen && (
                  <div
                    className={presets.xIcon}
                    onClick={toggleFullScreen}
                    onTouchStartCapture={toggleFullScreen}
                    role="button"
                  >
                    <XIcon />
                  </div>
                )}
              </div>
              <div className={presets.controlsContainer}>
                <Controls
                  toggleFullScreen={toggleFullScreen}
                  controls={canvasController?.controls || noControls}
                >
                  {CustomControls && (
                    <CustomControls {...customControlsProps} />
                  )}
                </Controls>
              </div>
              {project.summary}
            </div>
          </div>
          {projectId === "classifai3D" && canvasController && (
            <Classifai3DDomOverlay
              classifai3D={canvasController as Classifai3D}
            />
          )}
        </>
      ) : (
        <div className={presets.container}>
          <p>Project {projectId} doesn&apos;t exist yet.</p>
        </div>
      )}
    </Screen>
  );
};
