const GEOMETRY_COUNT = 20;

export const preGeneratedGeometries = Array.from(
  { length: GEOMETRY_COUNT },
  (_, index) =>
    // eslint-disable-next-line global-require, import/no-dynamic-require, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-var-requires
    require(`./${index}.txt`) as string,
);
