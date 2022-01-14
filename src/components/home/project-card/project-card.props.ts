import { HTMLAttributes } from "react";
import { ContentType } from "../../../content";

export interface ProjectCardProps extends HTMLAttributes<HTMLElement> {
  name: string;
  text: string;
  projectId: string;
  type: ContentType;
  image?: string;
  isPreview?: boolean;
}
