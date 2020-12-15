const GEOMETRY_COUNT = 20;

const preGeneratedGeometries = Array.from(
  { length: GEOMETRY_COUNT },
  (_, index) =>
    // eslint-disable-next-line global-require, import/no-dynamic-require, @typescript-eslint/no-unsafe-return
    require(`./${index}.txt`),
);

export default preGeneratedGeometries;
