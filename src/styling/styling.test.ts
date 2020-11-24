import classNames from ".";

describe("classNames", () => {
  it("should return undefined if no class name is given", () => {
    expect(classNames()).toBe(undefined);
    expect(classNames(false)).toBe(undefined);
    expect(classNames(undefined, false)).toBe(undefined);
  });

  it("should return a class name", () => {
    expect(classNames("class1")).toBe("class1");
    expect(classNames("class1", false)).toBe("class1");
  });

  it("should merge multiple class names", () => {
    expect(classNames("class1", "class2")).toBe("class1 class2");
    expect(classNames("class1", false, "class2")).toBe("class1 class2");
    expect(classNames("class1", undefined, "class2", false, "class3")).toBe(
      "class1 class2 class3",
    );
  });
});
