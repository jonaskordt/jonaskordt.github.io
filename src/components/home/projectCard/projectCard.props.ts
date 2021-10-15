import { HTMLAttributes } from "react";
import { ContentType } from "../../../content";

export default interface ProjectCardProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  name: string;
  text: string;
  projectId: string;
  type: ContentType;
  image?: string;
  isPreview?: boolean;
}
