import React from "react";

import presets from "../../screens/project/project.module.scss";

export const sphereDotsSummary = (
  <p className={presets.text}>
    This project showcases evenly distributed points on a sphere. They are
    created by continuously subdividing the faces of an octahedron. The points
    can be used as ray direction in progressive local ambient occlusion for
    volume ray tracing. There it is imortant that rays are distributed evenly at
    every step in progressive local ambient occlusion.
  </p>
);

export const sphereDotsQuickSummary =
  "A small project showcasing evenly distributed points on a sphere made for local ambient occlusion in volume ray tracing.";
