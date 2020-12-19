import React from "react";

import presets from "../../screens/project/project.module.scss";

export const classifai3DSummary = (
  <p className={presets.text}>
    This is my bachelor thesis project called &quot;Classifai&apos;s 3D
    Toolkit&quot;. It allows correcting segmentations of MRI scans in 3D by
    erasing isolated connected structures of the segmentation. It brings an
    intuitive navigation system from 3D games and a powerful selection system
    from 3D design software to the medical domain. The actual integration into
    Classifai includes a more sophisticated user interface and obviously also
    persists the changes (here you can just reload the page to start again). To
    learn more about the project, check out my{" "}
    <a href="/#/blogs/bachelorThesis">demo video</a>.
  </p>
);

export const classifai3DQuickSummary =
  "My bachelor's thesis project. Enables 3D exploration and modification of MRI scans as an extension to Classifai.";
