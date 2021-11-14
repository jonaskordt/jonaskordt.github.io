import React from "react";
import YouTube from "react-youtube-embed";

import { PdfLink } from "../../components/blog/pdf-link";
import { Heading } from "../../components/shared/heading";

export const regionGrowingTitle =
  "Interactive Volumetric Region Growing for Brain Tumor Segmentation on MRI using WebGL";

export const regionGrowingQuickSummary = `"${regionGrowingTitle}" published at Web3D 2021.`;

export const regionGrowingPaper = (
  <div>
    <Heading text={regionGrowingTitle} preset="centered" />
    <PdfLink pdfName="regionGrowing" />
    <Heading text="Citation" preset="small-centered" />
    <p>
      Jonas Kordt, Paul Brachmann, Daniel Limberger, and Christoph Lippert.
      2021. {regionGrowingTitle}. In{" "}
      <i>
        The 26th International Conference on 3D Web Technology (Web3D ’21),
        November 8–12, 2021, Pisa, Italy
      </i>
      . ACM, New York, NY, USA, 8 pages.
    </p>
    <Heading text="Abstract" preset="small-centered" />
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
    <Heading text="Presentation" preset="small-centered" />
    <div>
      <YouTube id="isNfZmr5XNw" />
    </div>
  </div>
);
