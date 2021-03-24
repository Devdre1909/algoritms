const selectionSort = require("../selectionSort");

describe("Selection Sort", () => {
  it("Should return empty array if passed array is empty", () => {
    const arr = [];
    expect(selectionSort(arr)).toBe(arr);
  });
  it("Should return a sorted array", () => {
    const arr = [3, 1, 6, 7, 2, 4];
    expect(selectionSort(arr)).toBe([1, 2, 3, 4, 6, 7]);
  });
});
