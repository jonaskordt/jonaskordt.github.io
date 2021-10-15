import CanvasController from "../../content/projects/default";

export interface IContent {
  name: string;
  shortName: string;
  quickSummary: string;
  isPreview: boolean;
  img: string;
}

export interface IBlog extends IContent {
  content: JSX.Element;
}

export interface IProject extends IContent {
  CanvasController: typeof CanvasController;
  summary: JSX.Element;
}

export type IPaper = IContent;
