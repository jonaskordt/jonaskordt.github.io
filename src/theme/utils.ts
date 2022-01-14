import { theme, Theme } from "./theme";

/** Extracts a value from the theme. */
export const lookup = <TK extends keyof Theme>(themeKey: TK) => <
  VK extends keyof Theme[TK]
>(
  valueKey: VK,
) => {
  const values = theme[themeKey];
  if (!values) return valueKey;

  const value = values[valueKey];
  if (value === undefined) return valueKey;
  return value;
};

export const border = lookup("borders");
export const color = lookup("colors");
export const shadow = lookup("shadows");
export const mediaQuery = lookup("mediaQueries");
