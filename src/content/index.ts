import { Blog, Project } from "../lib/types/content";
import animatedGoldIMG from "./images/animatedGold.png";
import bachelorThesisIMG from "./images/bachelorThesis.png";
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const customControls: { [id: string]: React.FC<any> } = {
  classifai3D: Classifai3DControls,
};

export const homeOrder: { isBlog: boolean; id: string }[] = [
  { isBlog: false, id: "classifai3D" },
  { isBlog: true, id: "classifai" },
  { isBlog: false, id: "sphereDots" },
  { isBlog: true, id: "bachelorThesis" },
  { isBlog: false, id: "planes" },
  { isBlog: false, id: "animation" },
];
