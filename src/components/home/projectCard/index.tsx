import React from "react";
import { ContentType } from "../../../content";

import Card from "../../shared/card";
import Heading from "../../shared/heading";
import presets from "./projectCard.module.scss";
import ProjectCardProps from "./projectCard.props";

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { name, text, projectId, type, image, isPreview, ...rest } = props;

  const link =
    // eslint-disable-next-line no-nested-ternary
    type === ContentType.Paper
      ? `/papers/${projectId}`
      : type === ContentType.Blog
      ? `/blogs/${projectId}`
      : `/projects/${projectId}`;

  return (
    <Card
      to={isPreview ? undefined : link}
      displaySoonTag={isPreview}
      {...rest}
    >
      <div className={presets.container}>
        <Heading text={name} className={presets.heading} />
        <p className={presets.text}>{text}</p>
        {image && (
          <div className={presets.imgContainer}>
            <img className={presets.img} src={image} alt="" />
            <div className={presets.backgroundBlend} />
          </div>
        )}
        <p className={presets.type}>
          {
            // eslint-disable-next-line no-nested-ternary
            type === ContentType.Paper
              ? "Paper"
              : type === ContentType.Blog
              ? "Blog"
              : "Project"
          }
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
