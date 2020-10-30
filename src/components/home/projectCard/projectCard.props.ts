import { HTMLAttributes } from "react";

export default interface ProjectCardProps extends HTMLAttributes<HTMLElement> {
  preset?: string;

  name: string;
  text: string;
  projectId: string;
  isBlog?: boolean;
  image?: string;
  isPreview?: boolean;
}
