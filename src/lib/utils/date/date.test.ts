import { formatDate, padToTwo } from ".";

describe("padToTwo", () => {
  it("should pad single digit numbers with a 0 on the left", () => {
    expect(padToTwo(1)).toBe("01");
    expect(padToTwo(5)).toBe("05");
  });

  it("should not pad double digit numbers", () => {
    expect(padToTwo(10)).toBe("10");
    expect(padToTwo(31)).toBe("31");
  });
});

describe("formatDate", () => {
  it("should return the dd.mm.yyyy date format", () => {
    // Date constructor month argument is 0 based
    expect(formatDate(new Date(2020, 11, 15))).toBe("15.12.2020");
    expect(formatDate(new Date(1900, 0, 1))).toBe("01.01.1900");
  });

  it("should return 'MonthName yyyy' if the noDay flag is provided", () => {
    expect(formatDate(new Date(2020, 0), true)).toBe("January 2020");
    expect(formatDate(new Date(1950, 8), true)).toBe("September 1950");
  });

  it("should return yyyy date format if the noDay and noMonth flags are provided", () => {
    expect(formatDate(new Date(2020, 0), true, true)).toBe("2020");
    expect(formatDate(new Date(2000, 0), true, true)).toBe("2000");
  });
});
