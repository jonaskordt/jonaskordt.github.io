import React from "react";

import { CenteredHeading } from "../../components/shared/heading";
import { PaperLinks } from "../../components/blog/paper-links";

export const masterThesisTitle =
  "Segment Anything Semi-automatically in Volumetric Medical Images Efficiently";

export const masterThesisQuickSummary = `My master thesis on the topic "${masterThesisTitle}".`;

export const masterThesisBlog = (
  <div>
    <CenteredHeading text={masterThesisTitle} />
    <div>
      <PaperLinks pdfName="master-thesis-jonas-kordt" />
    </div>
    <p>
      Volumetric medical imaging, such as computed tomography (CT) and magnetic
      resonance imaging (MRI), is an important tool in both clinical and
      research settings. To label raw image data for analysis, regions of
      interest are often segmented in the images. This is useful for gathering
      data during research and for diagnosis and treatment planning. However,
      segmenting these volumetric images manually is time-consuming and requires
      medical expertise, which makes it expensive.
    </p>
    <p>
      Recently, the Segment Anything Model (SAM) has been introduced as a
      foundation model for promptable (semi-automatic) segmentation, allowing
      segmentation through simple point and bounding box prompts. While SAM has
      been trained on 2D natural images, it shows surprising zero-shot
      performance for unseen tasks. To further improve the performance of SAM on
      medical images, it has been fine-tuned and adapted to create specialized
      versions for medical images, such as MedSAM.
    </p>
    <p>
      Although MedSAM improves upon SAM, it is still a 2D model, resulting in a
      tedious slice-by-slice segmentation workflow for volumetric images. Thus,
      we design a novel 3D workflow breaking this slice-by-slice procedure. To
      achieve this workflow, we propose prompt engineering strategies to
      generate system-prompts for MedSAM on surrounding slices. This way, users
      can segment a whole volumetric image while working on only a subset of its
      slices.
    </p>
    <p>
      We evaluate our prompt engineering strategies on the diverse set of
      medical image datasets from the Medical Segmentation Decathlon challenge.
      We find that they can, with interactive run-time, significantly reduce the
      segmentation effort while only marginally reducing the segmentation
      quality compared to applying MedSAM slice-by-slice. Breaking out of the
      inherently time-consuming slice-by-slice workflow with only a minor
      reduction in segmentation quality is a significant step in streamlining
      semi-automatic volumetric medical image segmentation. Looking forward,
      this 3D workflow could utilize other 2D models, offering medical experts a
      flexible and powerful tool for semi-automatic volumetric image
      segmentation across various applications.
    </p>
  </div>
);
