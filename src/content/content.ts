import { IBlog, IPaper, IProject } from "../lib";
import {
  animatedGoldImage,
  bachelorThesisImage,
  regionGrowingImage,
  classifaiImage,
  classifai3DImage,
  planesImage,
  sphereDotsImage,
  volumeRenderingImage,
} from "./images";
import {
  Animation,
  Classifai3D,
  Classifai3DControls,
  SphereDots,
  TransparentPlanes,
} from "./projects";
import {
  animationQuickSummary,
  animationSummary,
  bachelorThesisBlog,
  bachelorThesisQuickSummary,
  bachelorThesisTitle,
  classifaiBlog,
  classifaiQuickSummary,
  classifai3DQuickSummary,
  classifai3DSummary,
  planesQuickSummary,
  planesSummary,
  sphereDotsQuickSummary,
  sphereDotsSummary,
  volumeRenderingQuickSummary,
  volumeRenderingBlog,
  volumeRenderingTitle,
  regionGrowingPaper,
  regionGrowingTitle,
  regionGrowingQuickSummary,
} from "./text";

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
    img: classifaiImage,
  },
  bachelorThesis: {
    name: bachelorThesisTitle,
    shortName: "Bachelor Thesis",
    quickSummary: bachelorThesisQuickSummary,
    content: bachelorThesisBlog,
    isPreview: false,
    img: bachelorThesisImage,
  },
  volumeRendering: {
    name: volumeRenderingTitle,
    shortName: "Volume Rendering",
    quickSummary: volumeRenderingQuickSummary,
    content: volumeRenderingBlog,
    isPreview: false,
    img: volumeRenderingImage,
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
    img: planesImage,
  },
  classifai3D: {
    name: "Classifai's 3D Toolkit",
    shortName: "Classifai3D",
    CanvasController: Classifai3D,
    summary: classifai3DSummary,
    quickSummary: classifai3DQuickSummary,
    isPreview: false,
    img: classifai3DImage,
  },
  animation: {
    name: "Animated Gold",
    shortName: "Animated Gold",
    CanvasController: Animation,
    summary: animationSummary,
    quickSummary: animationQuickSummary,
    isPreview: false,
    img: animatedGoldImage,
  },
  sphereDots: {
    name: "Evenly Distributed Points on a Sphere",
    shortName: "Sphere Points",
    CanvasController: SphereDots,
    summary: sphereDotsSummary,
    quickSummary: sphereDotsQuickSummary,
    isPreview: false,
    img: sphereDotsImage,
  },
};

export const papers: { [id: string]: IPaper } = {
  regionGrowing: {
    name: regionGrowingTitle,
    shortName: "Region Growing",
    quickSummary: regionGrowingQuickSummary,
    isPreview: false,
    img: regionGrowingImage,
    content: regionGrowingPaper,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const customControls: { [id: string]: React.FC<any> } = {
  classifai3D: Classifai3DControls,
};

export const homeOrder: { type: ContentType; id: string }[] = [
  { type: ContentType.Paper, id: "regionGrowing" },
  { type: ContentType.Blog, id: "volumeRendering" },
  { type: ContentType.Project, id: "classifai3D" },
  { type: ContentType.Blog, id: "classifai" },
  { type: ContentType.Project, id: "sphereDots" },
  { type: ContentType.Blog, id: "bachelorThesis" },
  { type: ContentType.Project, id: "planes" },
  { type: ContentType.Project, id: "animation" },
];
