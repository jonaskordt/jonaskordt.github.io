import React from "react";
import { ProjectSummary } from "../../screens/project";

export const sphereDotsSummary = (
  <ProjectSummary>
    This project showcases evenly distributed points on a sphere. They are
    created by continuously subdividing the faces of an octahedron. The points
    can be used as ray direction in progressive local ambient occlusion for
    volume ray tracing. There it is imortant that rays are distributed evenly at
    every step in progressive local ambient occlusion.
  </ProjectSummary>
);

export const sphereDotsQuickSummary =
  "A small project showcasing evenly distributed points on a sphere made for local ambient occlusion rays used for shading in volume ray marching.";
