import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled, { css } from "styled-components";

import {
  Controls,
  WebGLCanvas,
  Header,
  FullHeightScreen,
  CenteredHeading,
} from "../components";
import {
  customControls,
  projects,
  Classifai3D,
  Classifai3DDomOverlay,
  CrosshairIcon,
  CanvasController,
} from "../content";
import { noControls } from "../lib";
import { color, mediaQuery, XIcon } from "../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 30px 70px;
  min-height: 0;
  min-width: 0;

  ${mediaQuery("tinyScreens")} {
    margin: 30px 20px;
  }

  ${mediaQuery("phoneOnly")} {
    height: unset;
  }
`;

const Grid = styled.div`
  column-gap: 50px;
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: 1fr auto;
  height: 100%;
  min-height: 0;
  min-width: 0;
  row-gap: 30px;

  ${mediaQuery("tinyScreens")} {
    column-gap: 10px;
    row-gap: 10px;
  }

  ${mediaQuery("phoneOnly")} {
    display: block;
    height: unset;
  }
`;

const CanvasContainer = styled.div<{ fullScreen?: boolean }>`
  ${(props) =>
    props.fullScreen
      ? css`
          background-color: ${color("background")};
          height: 100vh;
          left: 0;
          min-height: 100%;
          overflow: hidden;
          position: absolute !important;
          top: 0;
          width: 100%;
          z-index: 100;
        `
      : css`
          grid-area: 1 / 2 / span 1 / span 1;
          min-height: 0;
          min-width: 0;

          ${mediaQuery("phoneOnly")} {
            height: calc(min(100vw, 100vh) - 40px);
            margin-bottom: 30px;
            margin-left: 0;
            width: 100%;
          }
        `}

  :focus {
    outline: none;
  }
`;

const CrosshairPointer = styled.div`
  display: none;
  height: 30px;
  left: calc(50% - 15px);
  position: absolute;
  top: calc(50% - 15px);
  width: 30px;

  svg {
    fill: black;
    stroke: white;
    stroke-width: 4pt;
  }
`;

const XIconContainer = styled.div`
  height: 30px;
  left: 10px;
  position: absolute;
  top: 10px;
  width: 30px;

  svg {
    fill: gray;
  }
`;

const ControlsContainer = styled.div`
  grid-area: 1 / 1 / span 2 / span 1;
  max-width: 300px;
  min-height: 0;

  ${mediaQuery("mediumScreens")} {
    grid-area: 1 / 1 / span 1 / span 1;
  }

  ${mediaQuery("phoneOnly")} {
    margin-bottom: 20px;
  }
`;

export const ProjectSummary = styled.p`
  font-size: 20px;
  grid-area: 2 / 2 / span 1 / span 1;
  line-height: 30px;
  min-height: 0;
  overflow: hidden;
  text-align: justify;

  ${mediaQuery("mediumScreens")} {
    grid-area: 2 / 1 / span 1 / span 2;
  }

  ${mediaQuery("hugeScreens")} {
    margin-right: 350px;
  }
`;

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
    if (canvasRef.current && project?.CanvasController) {
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
    <FullHeightScreen>
      <Header thin />
      {project ? (
        <>
          <Container>
            <CenteredHeading text={project.name} />
            <Grid>
              <CanvasContainer fullScreen={fullScreen}>
                <WebGLCanvas ref={canvasRef} border={!noCanvasBorder} />
                {projectId === "classifai3D" && (
                  <CrosshairPointer id="crosshairPointer">
                    <CrosshairIcon />
                  </CrosshairPointer>
                )}
                {fullScreen && (
                  <XIconContainer
                    onClick={toggleFullScreen}
                    onTouchStartCapture={toggleFullScreen}
                    role="button"
                  >
                    <XIcon />
                  </XIconContainer>
                )}
              </CanvasContainer>
              <ControlsContainer>
                <Controls
                  toggleFullScreen={toggleFullScreen}
                  controls={canvasController?.controls || noControls}
                >
                  {CustomControls && (
                    <CustomControls {...customControlsProps} />
                  )}
                </Controls>
              </ControlsContainer>
              {project.summary}
            </Grid>
          </Container>
          {projectId === "classifai3D" && canvasController && (
            <Classifai3DDomOverlay
              classifai3D={canvasController as Classifai3D}
            />
          )}
        </>
      ) : (
        <Container>
          <p>Project {projectId} doesn&apos;t exist yet.</p>
        </Container>
      )}
    </FullHeightScreen>
  );
};
