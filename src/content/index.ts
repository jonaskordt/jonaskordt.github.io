import { Blog, Project } from "../lib/types/content";
import bachelorThesisIMG from "./images/bachelorThesis.png";
import classifaiIMG from "./images/classifai.png";
import classifai3DIMG from "./images/classifai3D.png";
import planesIMG from "./images/planes.png";
import CanvasController from "./projects/default";
import TransparentPlanes from "./projects/transparentPlanes";
import bachelorThesisBlog, {
  bachelorThesisQuickSummary,
  bachelorThesisTitle,
} from "./text/bachelorThesis";
import classifaiBlog, { classifaiQuickSummary } from "./text/classifai";
import {
  classifai3DQuickSummary,
  classifai3DSummary,
} from "./text/classifai3D";
import { planesQuickSummary, planesSummary } from "./text/planes";

export const blogs: { [id: string]: Blog } = {
  classifai: {
    name: "Classifai",
    shortName: "Classifai",
    quickSummary: classifaiQuickSummary,
    content: classifaiBlog,
    isPreview: false,
    img: classifaiIMG,
  },
  bachelorThesis: {
    name: bachelorThesisTitle,
    shortName: "Bachelor Thesis",
    quickSummary: bachelorThesisQuickSummary,
    content: bachelorThesisBlog,
    isPreview: false,
    img: bachelorThesisIMG,
  },
};

export const projects: { [id: string]: Project } = {
  planes: {
    name: "Intersecting Transparent Planes",
    shortName: "Planes",
    CanvasController: TransparentPlanes,
    summary: planesSummary,
    quickSummary: planesQuickSummary,
    isPreview: false,
    img: planesIMG,
  },
  classifai3D: {
    name: "Classifai's 3D Toolkit",
    shortName: "Classifai3D",
    CanvasController,
    summary: classifai3DSummary,
    quickSummary: classifai3DQuickSummary,
    isPreview: true,
    img: classifai3DIMG,
  },
};

export const homeOrder: { isBlog: boolean; id: string }[] = [
  { isBlog: true, id: "classifai" },
  { isBlog: false, id: "planes" },
  { isBlog: true, id: "bachelorThesis" },
  { isBlog: false, id: "classifai3D" },
];
