import React from "react";

import Card from "../card";
import Heading from "../heading";
import presets from "./projectCard.module.scss";
import ProjectCardProps from "./projectCard.props";

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { name, text, projectId, isBlog = false, image, ...rest } = props;

  const link = isBlog ? `/blogs/${projectId}` : `/projects/${projectId}`;

  return (
    <Card to={link} {...rest}>
      <div className={presets.container}>
        <Heading text={name} preset="projectCard" />
        <p className={presets.text}>{text}</p>
        {image && (
          <div className={presets.imgContainer}>
            <img className={presets.img} src={image} alt="" />
            <div className={presets.backgroundBlend} />
          </div>
        )}
        <p className={presets.type}>{isBlog ? "Blog" : "Project"}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
