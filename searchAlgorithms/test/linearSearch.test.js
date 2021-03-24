const search = require("../linearSearch");

describe("Search through an array of items", () => {
  it("Should return -1 if array is empty", () => {
    expect(search([], 10)).toBe(-1);
  });
  it("Should return index if match an element", () => {
    expect(search([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(search(["Sola", "Tola", "Bayo"], "Tola")).toBe(1);
  });
});
