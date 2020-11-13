import React from "react";
import YouTube from "react-youtube-embed";

import Heading from "../../components/shared/heading";

export const bachelorThesisTitle =
  "Classifai’s 3D Toolkit: Correcting Segmentation Errors in 3D Medical Image Analysis";

export const bachelorThesisQuickSummary = `My bachelor thesis on the topic "${bachelorThesisTitle}".`;

const bachelorThesisBlog = (
  <div>
    <Heading text={bachelorThesisTitle} />
    <p>
      In this thesis, I present Classifai’s 3D Toolkit, a new 3D annotation tool
      for medical image analysis, which allows modifying segmentations in 3D. In
      current tooling, there are usually problems with the workflow, as 3D
      images are annotated in a 2D environment and automatic segmentation often
      produces errors which are time consuming to correct in 2D. With
      Chassifai’s 3D Toolkit, the time it takes to correct a machine generated
      segmentation is greatly reduced and the frustrating task of removing the
      same error on many slices is removed, thus increasing usability and making
      the training of a machine learning model much faster. For removing obvious
      machine learning errors, benchmarking showed that Classifai’s 3D Toolkit
      can reduce the time it takes with existing tools by up to 98.5%. Saving
      this time can both, make studies on bigger datasets possible and, in a
      clinical environment, accelerate operation planning, for example for tumor
      resection operations.
    </p>
    <p>For a demo of Classifai’s 3D Toolkit check out the video below.</p>
    <div>
      <YouTube id="2O-99Zb-JR0" />
    </div>
    <p>For access to the full thesis contanct me.</p>
  </div>
);

export default bachelorThesisBlog;
