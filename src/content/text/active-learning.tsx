import React from "react";

import { PaperLinks } from "../../components/blog/paper-links";
import {
  CenteredHeading,
  SmallCenteredHeading,
} from "../../components/shared/heading";

export const activeLearningTitle =
  "Less Is More: A Comparison of Active Learning Strategies for 3D Medical Image Segmentation";

export const activeLearningQuickSummary = `"${activeLearningTitle}" published at ICML2022.`;

export const activeLearningPaper = (
  <div>
    <CenteredHeading text={activeLearningTitle} />
    <div>
      <PaperLinks link="https://realworldml.github.io/files/cr/paper33.pdf" />
    </div>
    <SmallCenteredHeading text="Citation" />
    <p>
      Josafat-Mattias Burmeister, Marcel Fernandez Rosas, Johannes Hagemann,
      Jonas Kordt, Jasper Blum, Simon Shabo, Benjamin Bergner, and Christoph
      Lippert. 2022. {activeLearningTitle}. In{" "}
      <i>
        ICML2022 Workshop on Adaptive Experimental Design and Active Learning in
        the Real World
      </i>
      . Baltimore, MD, USA.
    </p>
    <SmallCenteredHeading text="Abstract" />
    <p>
      Since labeling medical image data is a costly and labor-intensive process,
      active learning has gained much popularity in the medical image
      segmentation domain in recent years. A variety of active learning
      strategies have been proposed in the literature, but their ef- fectiveness
      is highly dependent on the dataset and training scenario. To facilitate
      the comparison of existing strategies and provide a baseline for
      evaluating novel strategies, we evaluate the performance of several
      well-known active learning strategies on three datasets from the Medical
      Segmentation Decathlon. Additionally, we consider a strided sampling
      strategy specifically tailored to 3D image data. We demonstrate that both
      random and strided sampling act as strong baselines and discuss the
      advantages and disadvantages of the studied methods. To allow other
      researchers to compare their work to our results, we provide an
      open-source framework for benchmarking active learning strategies on a
      variety of medical segmentation datasets.
    </p>
  </div>
);
