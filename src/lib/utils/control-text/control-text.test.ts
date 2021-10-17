import { controlText } from "./control-text";

describe("controlText", () => {
  it("should return upper case single letters", () => {
    expect(controlText(["a"])).toBe("A");
    expect(controlText(["A"])).toBe("A");
  });

  it("should not change words", () => {
    expect(controlText(["shift"])).toBe("shift");
    expect(controlText(["Shift"])).toBe("Shift");
  });

  it("should combine multiple controls with a +", () => {
    expect(controlText(["Shift", "A"])).toBe("Shift + A");
    expect(controlText(["A", "B"])).toBe("A + B");
    expect(controlText(["A", "B", "C"])).toBe("A + B + C");
    expect(controlText(["a", "b", "c"])).toBe("A + B + C");
  });
});
