/**
 *
 * checkOdd
 *
 * Write a recursive function that checks if any number in a list is odd
 *
 * checkOdd([234,123,121,092]) // 123
 * checkOdd([3452,9834,1234,56]) // None
 *
 */

const { print } = require("../helpers");

function checkOdd(arr = []) {
  if (arr.length === 0) return "None";
  if (arr[0] % 2 === 1) return arr[0];
  checkOdd(arr.slice(1));
}

print(checkOdd([3452, 9834, 1234, 56]));
