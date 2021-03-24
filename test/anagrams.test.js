const { refactorValidAnagram, validAnagram } = require("../anagrams");

describe("anagrams", () => {
  it("check is second string is anagram of the first", () => {
    expect(validAnagram("anagram", "nagaram")).toBe(true);
    expect(refactorValidAnagram("qwerty", "qeywrt")).toBe(true);
  });

  it("check for anagrams, and faster", () => {
    expect(refactorValidAnagram("anagram", "nagaram")).toBe(true);
    expect(refactorValidAnagram("qwerty", "qeywrt")).toBe(true);
  });

  it("check for non anagrams", () => {
    expect(refactorValidAnagram("azz", "aza")).toBe(false);
  });

  it("expects string of different length be false", () => {
    expect(refactorValidAnagram("good", "bad")).toBe(false);
  });

  it("expects empty string to be true", () => {
    expect(refactorValidAnagram("", "")).toBe(true);
  });
});
