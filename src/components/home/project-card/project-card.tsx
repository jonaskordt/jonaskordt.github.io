import React from "react";
import styled from "styled-components";
import { ContentType } from "../../../content";

import { Card } from "../../shared";
import { Heading } from "../../shared/heading";
import { ProjectCardProps } from "./project-card.props";

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 150px;
  position: relative;
  user-select: none;
  width: 300px;
`;

const ImageContainer = styled.div`
  flex-grow: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledImg = styled.img`
  height: 115px;
  width: auto;
`;

const BackgroundBlend = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(233, 237, 240, 255),
    rgba(233, 237, 240, 0)
  );
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const Text = styled.p`
  font-size: 16.1px;
  line-height: 20px;
  max-width: 203px;
  position: relative;
  z-index: 20;
`;

const Type = styled.p`
  bottom: 0;
  color: #bbbbbb;
  font-size: 25px;
  font-weight: 700;
  position: absolute;
  right: 0;
  text-align: right;
`;

const StyledHeading = styled(Heading)`
  font-size: 30px;
  line-height: 35px;
  margin-bottom: 15px;
  z-index: 20;
`;

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const {
    name,
    text,
    projectId,
    link,
    type,
    image,
    isPreview,
    ...rest
  } = props;

  const route =
    // eslint-disable-next-line no-nested-ternary
    type === ContentType.Paper
      ? `/papers/${projectId}`
      : type === ContentType.Blog
      ? `/blogs/${projectId}`
      : `/projects/${projectId}`;

  return (
    <Card
      to={isPreview ? undefined : route}
      link={link}
      displaySoonTag={isPreview}
      {...rest}
    >
      <Container>
        <StyledHeading text={name} />
        <Text>{text}</Text>
        {image && (
          <ImageContainer>
            <StyledImg src={image} alt="" />
            <BackgroundBlend />
          </ImageContainer>
        )}
        <Type>
          {
            // eslint-disable-next-line no-nested-ternary
            type === ContentType.Paper
              ? "Paper"
              : type === ContentType.Blog
              ? "Blog"
              : "Project"
          }
        </Type>
      </Container>
    </Card>
  );
};
