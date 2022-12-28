import React from "react";
import styled, { css } from "styled-components";
import { ContentType } from "../../../content";
import { color } from "../../../theme";

import { Card, FlexRow } from "../../shared";
import { Heading } from "../../shared/heading";
import { ProjectCardProps } from "./project-card.props";

const Container = styled.div`
  align-items: center;
  display: flex;
  min-height: 120px;
  height: 120px;
  position: relative;
  user-select: none;
  max-width: 100%;

  @media (max-width: 700px) {
    height: unset;
  }
`;

const ImageContainer = styled(FlexRow)`
  flex-grow: 1;
  flex-shrink: 0;
  position: relative;
  justify-content: flex-end;
  align-items: center;
  height: 115px;
  min-width: 170px;
  transition: height 0.15s linear;

  @media (max-width: 450px) {
    height: 90px;
    min-width: 130px;
  }
`;

const StyledImg = styled.img`
  height: 100%;
  width: auto;
`;

const BackgroundBlend = styled.div`
  background-image: linear-gradient(
    to right,
    rgba(233, 237, 240, 200),
    rgba(233, 237, 240, 0)
  );
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  transition: opacity 0.15s linear;
`;

const Text = styled.p`
  font-size: 16px;
  letter-spacing: 0;
  word-spacing: -0.5px;
  line-height: 20px;
`;

const Type = styled.p`
  bottom: 0;
  color: #bbbbbb;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  left: 0;
  text-align: right;

  @media (max-width: 700px) {
    display: none;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 30px;
  line-height: 25px;
  margin-bottom: 0;
  max-width: 150px;
  width: 150px;
  flex-shrink: 0;
`;

const InvisibleCard = styled(Card)<{ isLast?: boolean }>`
  box-shadow: none;
  border-radius: 0;
  padding-bottom: 60px;
  margin-bottom: 50px;
  max-width: 630px;

  @media (max-width: 450px) {
    padding-left: 0;
    padding-right: 0;
  }

  ${({ isLast }) =>
    isLast
      ? ""
      : css`
          border-bottom: solid 1px ${color("border")};
        `}

  :hover {
    box-shadow: none;

    .image {
      height: 130px;

      @media (max-width: 450px) {
        height: 100px;
      }
    }

    .overlay {
      opacity: 0;
    }
  }

  :active {
    box-shadow: none;
  }
`;

const TextContainer = styled(FlexRow)`
  align-items: center;
  max-width: 460px;
  gap: 10px;
  flex-shrink: 0;

  @media (max-width: 700px) {
    flex-direction: column;
    flex-shrink: 1;
    align-items: flex-start;
    min-height: 130px;
  }
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
    isLast,
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
    <InvisibleCard
      to={isPreview ? undefined : route}
      link={link}
      displaySoonTag={isPreview}
      isLast={isLast}
      {...rest}
    >
      <Container>
        <TextContainer>
          <StyledHeading text={name} />
          <Text>{text}</Text>
        </TextContainer>
        {image && (
          <>
            <ImageContainer className="image">
              <StyledImg src={image} alt="" />
              <BackgroundBlend className="overlay" />
            </ImageContainer>
          </>
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
    </InvisibleCard>
  );
};
