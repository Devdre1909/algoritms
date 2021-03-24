const { maxSubarraySum } = require("../maxSubarraySum");

describe("maxSubArraySum", () => {
  it("return null for empty array", () => {
    expect(maxSubarraySum([], 2)).toBe(null);
  });

  it("return null when n is more than length of array", () => {
    expect(maxSubarraySum([1, 2, 3, 4], 5)).toBe(null);
  });

  it("return max consecutive sum", () => {
    expect(maxSubarraySum([1, 2, 3, 4], 2)).toBe(7);
  });
});
