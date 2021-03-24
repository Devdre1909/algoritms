/**
 *
 * countUniqueValues
 *
 * Implement a functions called countUniqueValues, which accepts
 * a sorted array, There can be negative numbers in the array, but
 * it will always be sorted
 *
 * countUniqueValues([1,1,1,1,1,2]) // 2
 * countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
 * countUniqueValues([]) // 0
 * countUniqueValues([-2,-1,-1,0,1]) // 4
 *
 */

function countUniqueValues(arr = []) {
  if (arr.length === 0) return 0;
  let a = 0;

  for (let b = 1; b < arr.length; b++) {
    if (arr[a] !== arr[b]) {
      a++;
      arr[a] = arr[b];
    }
  }

  return a + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
