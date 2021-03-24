const { arrayManipulation } = require("../arrayManipulation");

describe("arrayManipulation", () => {
  it("return max", () => {
    expect(
      arrayManipulation(5, [
        [1, 2, 100],
        [2, 5, 100],
        [3, 4, 10],
      ])
    ).toBe(200);
  });
});
