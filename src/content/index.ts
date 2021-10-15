import { IBlog, IPaper, IProject } from "../lib/types/content";
import animatedGoldIMG from "./images/animatedGold.png";
import bachelorThesisIMG from "./images/bachelorThesis.png";
import regionGrowingIMG from "./images/regionGrowing.png";
import classifaiIMG from "./images/classifai.png";
import classifai3DIMG from "./images/classifai3D.png";
import planesIMG from "./images/planes.png";
import sphereDotsIMG from "./images/sphereDots.png";
import Animation from "./projects/animation";
import Classifai3D from "./projects/classifai3D";
import Classifai3DControls from "./projects/classifai3D/customControls";
import SphereDots from "./projects/sphereDots";
import TransparentPlanes from "./projects/transparentPlanes";
import { animationQuickSummary, animationSummary } from "./text/animation";
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
import { sphereDotsQuickSummary, sphereDotsSummary } from "./text/sphereDots";

export enum ContentType {
  Blog = 0,
  Project = 1,
  Paper = 2,
}

export const blogs: { [id: string]: IBlog } = {
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

export const projects: { [id: string]: IProject } = {
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
    CanvasController: Classifai3D,
    summary: classifai3DSummary,
    quickSummary: classifai3DQuickSummary,
    isPreview: false,
    img: classifai3DIMG,
  },
  animation: {
    name: "Animated Gold",
    shortName: "Animated Gold",
    CanvasController: Animation,
    summary: animationSummary,
    quickSummary: animationQuickSummary,
    isPreview: false,
    img: animatedGoldIMG,
  },
  sphereDots: {
    name: "Evenly Distributed Points on a Sphere",
    shortName: "Sphere Points",
    CanvasController: SphereDots,
    summary: sphereDotsSummary,
    quickSummary: sphereDotsQuickSummary,
    isPreview: false,
    img: sphereDotsIMG,
  },
};

export const papers: { [id: string]: IPaper } = {
  regionGrowing: {
    name:
      "Interactive Volumetric Region Growing for Brain Tumor Segmentation on MRI using WebGL",
    shortName: "Region Growing",
    quickSummary:
      '"Interactive Volumetric Region Growing for Brain Tumor Segmentation on MRI using WebGL" to be published at Web3D 2021.',
    isPreview: true,
    img: regionGrowingIMG,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const customControls: { [id: string]: React.FC<any> } = {
  classifai3D: Classifai3DControls,
};

export const homeOrder: { type: ContentType; id: string }[] = [
  { type: ContentType.Paper, id: "regionGrowing" },
  { type: ContentType.Project, id: "classifai3D" },
  { type: ContentType.Blog, id: "classifai" },
  { type: ContentType.Project, id: "sphereDots" },
  { type: ContentType.Blog, id: "bachelorThesis" },
  { type: ContentType.Project, id: "planes" },
  { type: ContentType.Project, id: "animation" },
];
