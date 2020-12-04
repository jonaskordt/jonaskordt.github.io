import { convertPositionToWebGLPosition } from "./picking";

describe("convertPositionToWebGLPosition", () => {
  it("should convert a position on a canvas to the corresponding WebGl position", () => {
    expect(
      convertPositionToWebGLPosition(
        { x: 0, y: 0 },
        { width: 100, height: 100 },
      ).x,
    ).toBe(-1);
    expect(
      convertPositionToWebGLPosition(
        { x: 0, y: 0 },
        { width: 100, height: 100 },
      ).y,
    ).toBe(1);

    expect(
      convertPositionToWebGLPosition(
        { x: 100, y: 100 },
        { width: 100, height: 100 },
      ).x,
    ).toBe(1);
    expect(
      convertPositionToWebGLPosition(
        { x: 100, y: 100 },
        { width: 100, height: 100 },
      ).y,
    ).toBe(-1);

    expect(
      convertPositionToWebGLPosition(
        { x: 50, y: 50 },
        { width: 100, height: 100 },
      ).x,
    ).toBe(0);
    expect(
      convertPositionToWebGLPosition(
        { x: 50, y: 50 },
        { width: 100, height: 100 },
      ).y,
    ).toBe(0);
  });
});
