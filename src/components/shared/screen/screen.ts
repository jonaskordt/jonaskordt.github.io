import styled from "styled-components";
import { mediaQuery } from "../../../theme";

export const Screen = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;

export const ThinScreen = styled(Screen)`
  margin: 0px auto;
  max-width: 1220px;
`;

export const FullHeightScreen = styled(Screen)`
  height: 100vh;
  min-height: 100%;

  ${mediaQuery("phoneOnly")} {
    height: unset;
    min-height: 100vh;
  }
`;
