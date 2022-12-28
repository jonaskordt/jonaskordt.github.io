import { HTMLAttributes } from "react";
import { ContentType } from "../../../content";

export interface ProjectCardProps extends HTMLAttributes<HTMLElement> {
  name: string;
  text: string;
  projectId: string;
  link?: string;
  type: ContentType;
  image?: string;
  isPreview?: boolean;
  isLast?: boolean;
}
