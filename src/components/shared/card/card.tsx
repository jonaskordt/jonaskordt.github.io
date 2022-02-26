import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { FlexColumn } from "../flex";
import { border, color, mediaQuery } from "../../../theme";
import { CardProps } from "./card.props";

const Container = styled(FlexColumn)`
  box-shadow: ${border("normal")};
  align-items: flex-start;
  border-radius: 20px;
  max-width: 600px;
  overflow: hidden;
  padding: 20px;
  position: relative;
  transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;
  cursor: pointer;
  text-decoration: none;

  ${mediaQuery("tinyScreens")} {
    padding: 10px;
  }

  :hover {
    box-shadow: ${border("hover")};
  }
  :active {
    box-shadow: ${border("active")};
  }
  :visited {
    color: unset;
  }
`;

const SoonTag = styled.p`
  background-color: ${color("blue")};
  font-size: 18px;
  font-weight: 700;
  height: 30px;
  letter-spacing: 1px;
  padding-top: 50px;
  position: absolute;
  right: -92px;
  text-align: center;
  top: -28px;
  transform: rotate(45deg);
  width: 200px;
  z-index: 30;

  ${mediaQuery("tinyScreens")} {
    font-size: 16px;
    height: 25px;
    letter-spacing: unset;
    right: -95px;
    top: -30px;
  }
`;

export const Card: React.FC<CardProps> = (props) => {
  const { children, to, link, clickCallback, displaySoonTag, ...rest } = props;

  const history = useHistory();

  const clickHandler = useCallback(() => {
    if (to) {
      history.push(to);
      window.scrollTo(0, 0);
    }
  }, [history, to]);

  return (
    <Container
      {...rest}
      as={link ? "a" : undefined}
      href={link}
      onClick={link ? undefined : clickCallback || clickHandler}
      role="link"
    >
      {displaySoonTag && <SoonTag>Soon</SoonTag>}
      {children}
    </Container>
  );
};
