import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { color, mediaQuery } from "../../../theme";

import { Name } from "../../home";
import { Portrait } from "../portrait";
import { HeaderProps } from "./header.props";

const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid ${color("border")};
  display: flex;
  flex-direction: row-reverse;
  flex-shrink: 0;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px 50px;
  padding: 0px 10px;

  ${mediaQuery("tinyScreens")} {
    margin: 0px 10px;
    padding: 0;
  }
`;

const ContentContainer = styled.div`
  flex-shrink: 0;
  margin: 10px;
  text-align: left;
`;

const NameContainer = styled(ContentContainer)`
  flex-grow: 1;
  flex-shrink: 0;
  width: 280px;
  cursor: pointer;
`;

const PortraitContainer = styled(ContentContainer)`
  margin-bottom: 20px;
  margin-top: 20px;

  ${mediaQuery("tinyScreens")} {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`;

export const Header: React.FC<HeaderProps> = (props) => {
  const { thin = false, ...rest } = props;
  const history = useHistory();

  const clickHandler = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <Container {...rest}>
      <PortraitContainer>
        <Portrait small={thin} />
      </PortraitContainer>
      <NameContainer onClick={clickHandler} role="link">
        <Name />
      </NameContainer>
    </Container>
  );
};
