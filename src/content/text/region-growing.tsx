import React from "react";
import YouTube from "react-youtube-embed";

import { PaperLinks } from "../../components/blog/paper-links";
import { CitationLink } from "../../components/blog/citation-link";
import {
  CenteredHeading,
  SmallCenteredHeading,
} from "../../components/shared/heading";

export const regionGrowingTitle =
  "Interactive Volumetric Region Growing for Brain Tumor Segmentation on MRI using WebGL";

export const regionGrowingQuickSummary = `"${regionGrowingTitle}" published at Web3D 2021.`;

export const regionGrowingPaper = (
  <div>
    <CenteredHeading text={regionGrowingTitle} />
    <div>
      <PaperLinks pdfName="region-growing" doi="10.1145/3485444.3487640" />
    </div>
    <SmallCenteredHeading text="Citation" />
    <p>
      Jonas Kordt, Paul Brachmann, Daniel Limberger, and Christoph Lippert.
      2021. {regionGrowingTitle}. In{" "}
      <i>
        The 26th International Conference on 3D Web Technology (Web3D ’21),
        November 8–12, 2021, Pisa, Italy
      </i>
      . ACM, New York, NY, USA, 8 pages.{" "}
      <CitationLink link="https://doi.org/10.1145/3485444.3487640" />
    </p>
    <SmallCenteredHeading text="Abstract" />
    <p>
      Volumetric segmentation of medical images is an essential tool in
      treatment planning and many longitudinal studies. While machine learning
      approaches promise to fully automate it, they most often still depend on
      manually labeled training data. We thus present a GPU-based volumetric
      region growing approach for semi-automatic brain tumor segmentation that
      can be interactively tuned. Additionally, we propose multidimensional
      transfer functions for ray tracing that allow users to judge the quality
      of the grown region. Our implementation produces a full brain tumor
      segmentation within a few milliseconds on consumer hardware. The
      visualization uses adaptive resolution scaling and progressive,
      asynchronous shading computation to maintain a stable 60 Hz refresh rate.
    </p>
    <SmallCenteredHeading text="Presentation" />
    <div>
      <YouTube id="isNfZmr5XNw" />
    </div>
  </div>
);
