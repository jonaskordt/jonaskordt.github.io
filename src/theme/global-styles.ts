import { createGlobalStyle } from "styled-components";

import { ThemeProps } from "./theme";

import { color, mediaQuery } from "./utils";

export const GlobalStyles = createGlobalStyle<ThemeProps>`
  body {
    font-family: "Gothic A1", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    margin: 0;
  }

  html {
    height: 100%;
    min-height: 100vh;

    ${mediaQuery("phoneOnly")} {
      height: unset;
      min-height: unset;
    }
  }

  main,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr {
    margin: 0;
  }

  input {
    border-radius: 0;
  }

  #root {
    background-color: ${color("background")};
    color: ${color("foreground")};
    height: 100%;
    overflow: auto;
  }

`;
