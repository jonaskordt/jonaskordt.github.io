import CanvasController from "../../content/projects/default";

export interface Content {
  name: string;
  shortName: string;
  quickSummary: string;
  isPreview: boolean;
  img: string;
}

export interface Blog extends Content {
  content: JSX.Element;
}

export interface Project extends Content {
  CanvasController: typeof CanvasController;
  summary: string;
}
