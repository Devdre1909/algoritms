/**
 *
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the
 * array has it's corresponding value squared in the second
 * array. The frequency of value must be the same
 *
 * same([1,2,3],[4,1,9]) //true
 * same([1,2,3], [1,9]) //false
 * same([1,2,1], [4,4,1]) // false
 *
 */
function same(arrayMain = [], arraySquared = []) {
  let r = [];

  // Frequency matters
  if (arrayMain.length !== arraySquared.length) return false;

  // Loop thought each el if array main
  arrayMain.forEach((el, i) => {
    // Remove element from arraySquared if it the power of the present
    // element
    if (arraySquared.includes(Math.pow(el, 2))) {
      arraySquared.splice(arraySquared.indexOf(Math.pow(el, 2)), 1);
      r.push(el);
    }
  });
  return r.length === arrayMain.length;
}

console.time("same");
console.log(same([1, 2, 3], [4, 1, 9]));
console.timeEnd("same");

// console.log(same([1, 2, 3], [1, 9]));
// console.log(same([1, 2, 1], [4, 4, 1]));

function sameRefactor(arrayMain, arraySquared) {
  if (arrayMain.length !== arraySquared.length) return false;

  let freqCounter1 = {};
  let freqCounter2 = {};

  for (const el of arrayMain) {
    freqCounter1[el] = (freqCounter1[el] || 0) + 1;
  }
  for (const el of arraySquared) {
    freqCounter2[el] = (freqCounter2[el] || 0) + 1;
  }
  for (const key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) return false;
    if (freqCounter2[key ** 2] !== freqCounter1[key]) return false;
  }
  return true;
}

console.time("same-refactored");
console.log(sameRefactor([1, 2, 3], [4, 1, 9]));
console.timeEnd("same-refactored");
