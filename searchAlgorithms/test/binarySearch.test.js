const binarySearch = require("../binarySearch");
describe("Search through an array of items", () => {
  it("Should return -1 if array is empty", () => {
    expect(binarySearch([], 10)).toBe(-1);
  });
  it("Should return index if match an element", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
    expect(binarySearch([3, 4, 5, 8, 12, 23, 34, 35, 36, 40], 12)).toBe(4);
  });
});
