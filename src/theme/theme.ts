import { ThemeProps as StyledThemeProps } from "styled-components";

const borderColor = "#c7cad0";

const shadowOffset = "5px";
const halfShadowOffset = "2.5px";
const shadowBlur = "5px";

/**
 * The application's theme.
 *
 * @see https://styled-system.com/theme-specification
 */
export const theme = {
  borders: {
    normal: `box-shadow: 0px 0px 0px 1px ${borderColor};`,
    hover: `box-shadow: 0px 0px 0px 2px ${borderColor};`,
    active: "box-shadow: 0px 0px 0px 1px #777777;",
  },
  colors: {
    background: "#e9edf0",
    foreground: "black",
    imgBackground: "#edf2f4",
    border: borderColor,
    cvBackground: "#c6cbd4",
    controlBackground: "#dde0e6",
    red: "#cb9ca1",
    blue: "#81b9bf",
    green: "#82ada9",
  },
  mediaQueries: {
    phoneOnly: "@media (max-width: 669px)",
    tinyScreens: "@media (max-width: 749px)",
    smallerScreens: "@media (max-width: 899px)",
    smallScreens: "@media (max-width: 1099px)",
    mediumScreens: "@media (max-width: 1399px)",
    hugeScreens: "@media (min-width: 2200px)",
  },
  shadows: {
    normal: `${shadowOffset} ${shadowOffset} ${shadowBlur} #d1d9e6, -${shadowOffset} -${shadowOffset} ${shadowBlur} white, -1px -1px 1px white`,
    hover: `${halfShadowOffset} ${halfShadowOffset} ${shadowBlur} #d1d9e6, -${halfShadowOffset} -${halfShadowOffset} ${shadowBlur} white`,
    active: `${halfShadowOffset} ${halfShadowOffset} ${shadowBlur} #d1d9e6 inset, -${halfShadowOffset} -${halfShadowOffset} ${shadowBlur} white inset`,
    progress: "1px 1px 2px #a1a9b6 inset, -1px -1px 2px #eeeeee inset",
    keyCard: `${shadowOffset} ${shadowOffset} ${shadowBlur} #bac1cc, -${shadowOffset} -${shadowOffset} ${shadowBlur} #edeff3, -1px -1px 1px white`,
    keyCardHover: `${halfShadowOffset} ${halfShadowOffset} ${shadowBlur} #bac1cc, -${halfShadowOffset} -${halfShadowOffset} ${shadowBlur} #edeff3`,
    keyCardActive: `${halfShadowOffset} ${halfShadowOffset} ${shadowBlur} #bac1cc inset, -${halfShadowOffset} -${halfShadowOffset} ${shadowBlur} #edeff3 inset`,
    slider: "3px 3px 3px #aab1bb, -3px -3px 3px #e5e8ec, -1px -1px 1px white",
    sliderHover: "2px 2px 3px #aab1bb, -2px -2px 3px #e5e8ec",
    toggle: "1px 1px 2px #a1a9b6 inset, -1px -1px 2px #eeeeee inset",
    toggleGreen: "2px 2px 2px #688b88 inset, -2px -2px 2px #b7cfcd inset",
    scroll: "1px 1px 2px #a1a9b6 inset, -1px -1px 2px white inset",
  },
};

export type Theme = typeof theme;
export type ThemeProps = StyledThemeProps<Theme>;
