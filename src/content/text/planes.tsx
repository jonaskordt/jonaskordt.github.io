import React from "react";
import { ProjectSummary } from "../../screens/project";

export const planesSummary = (
  <ProjectSummary>
    In computer graphics it is usually not possible to see object A through
    object B if you can also see object B through object A. This usually is not
    a problem because if said object A is further away from the camera than
    object B, it is not even desirable to see object B through object A.
    However, this changes once the objects intersect like these three planes.
    Now, every plane should be able to shine through every other plane. To make
    this possible, I split the three planes at their intersections, which
    results in 12 plane parts and then position them seamlessly. Together with a
    custom rendering order for those 12 slices based on the position of the
    camera, this produces the perfect transparency effect seen here.
  </ProjectSummary>
);

export const planesQuickSummary =
  "A way to have properly transparent intersecting planes with a variable intersection point. Developed for Classifai’s 3D Toolkit.";
