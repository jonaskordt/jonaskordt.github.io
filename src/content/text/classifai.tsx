import React from "react";
import YouTube from "react-youtube-embed";

import Heading from "../../components/shared/heading";

export const classifaiQuickSummary =
  "World first usable active learning system for medical image segmentation. Developed as a bachelor’s project at HPI.";

const classifaiBlog = (
  <div>
    <Heading text="Classifai" />
    <p>
      During my studies in IT-Systems Engineering at Hasso Plattner Institute at
      the University of Potsdam, I was part of a bachelor project team at the
      chair for Digital Health and Machine Learning. The goal of the project was
      to design and develop a usable active learning tool for 3D image
      segmentation in life science and medical applications. Over a span of 10
      months, we developed a fully working prototype of the software called
      Classifai. For a popular scientific explanation of the project you can
      check out our final project presentation.
    </p>
    <div>
      <YouTube id="Z8s3fdrzI7c" appendSrc="?start=6625&end=7310" />
    </div>
    <p>
      Classifai introduces an active learning workflow and brings an entirely
      new and easy to use editor with it, which supports touch and touch pen
      interaction. It supports creating new machine learning models based on a
      default model architecture for custom use cases, and also the use of
      pretrained models. For the whole process, little machine learning
      expertise is required, which enables medical experts to train machine
      learning models without the help from data scientists.
    </p>
    <p>
      Classifai runs in the web browser and offloads all the heavy computing
      such as machine learning to a server. This way users don’t need very
      powerful devices themselves and cross platform support is achieved as any
      operating system with any browser can run the system.
    </p>
    <p>
      The web frontend is built with React and uses the library Three.js to
      leverage WebGL for the graphics. It communicates to the backend via a
      REST-API. The backend is programmed with Python to give easy access to
      machine learning and uses the Django framework for the database.
    </p>
    <p>
      My main role in the team was programming the editor itself. It is build
      with WebGL using Three.js. For an overview of the editor check out this
      demo video.
    </p>
    <div>
      <YouTube id="OfchCyHBAII" appendSrc="?start=2" />
    </div>
    <p>
      After the bachelor project we have continued to develop Classifai at the
      chair for Digital Health and Machine Learning at HPI. Classifai has now
      been renamed to VISIAN and can be tried and tested{" "}
      <a href="http://visian.org" target="_blank" rel="noopener noreferrer">
        here
      </a>
      . We have since added new tools and a whole new 3D view which uses ray
      tracing (or, to be exact, ray marching) for direct volume rendering to
      display MRI scans and segmentations in 3D.
    </p>
  </div>
);

export default classifaiBlog;
