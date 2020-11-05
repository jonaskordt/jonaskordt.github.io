import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import Controls from "../../components/project/controls";
import WebGLCanvas from "../../components/project/webGLCanvas";
import Header from "../../components/shared/header";
import Heading from "../../components/shared/heading";
import Screen from "../../components/shared/screen";
import CanvasHandler from "../../content/projects/default";
import presets from "./project.module.scss";

interface IProjectParams {
  projectId: string;
}

let canvasHandler: CanvasHandler | undefined;

const Project: React.FC = () => {
  const { projectId } = useParams<IProjectParams>();
  // eslint-disable-next-line no-console
  console.log(projectId);

  /* Canvas Handler */

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasHandler = new CanvasHandler(canvasRef.current);
    }
    return () => {
      canvasHandler?.dispose();
    };
  }, []);

  /* Canvas Handler End */

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

  return (
    <Screen preset="fullHeight">
      <Header preset="thin" />
      <div className={presets.container}>
        <Heading preset="centered" text="Project Name" />
        <div className={presets.fullRow}>
          <Controls toggleFullScreen={toggleFullScreen} />
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
        </div>
        <p className={presets.text}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
    </Screen>
  );
};

export default Project;
