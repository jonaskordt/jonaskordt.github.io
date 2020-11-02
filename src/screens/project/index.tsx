import React, { useEffect, useRef } from "react";
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

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      canvasHandler = new CanvasHandler(canvasRef.current);
    }
    return () => {
      canvasHandler?.dispose();
    };
  });

  return (
    <Screen preset="fullHeight">
      <Header preset="thin" />
      <div className={presets.container}>
        <Heading preset="centered" text="Project Name" />
        <div className={presets.fullRow}>
          <Controls />
          <div className={presets.canvasContainer}>
            <WebGLCanvas ref={canvasRef} />
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
