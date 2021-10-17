export const classNames = (
  ...appliedClassNames: (string | false | undefined)[]
) => {
  const actualClassNames = appliedClassNames.filter((value) => Boolean(value));
  return actualClassNames.length ? actualClassNames.join(" ") : undefined;
};
