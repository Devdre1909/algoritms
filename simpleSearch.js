/**
 *
 * Using Divider and Conquer
 *
 * Given a sorted array  of integers, write a function
 * called search, that accepts a value and return the index where the
 * value passed to the function is located. If the value is not found, return -1
 *
 * search([1,2,3,4,5,6], 4) // 3
 * search([1,2,3,4,5,6], 6) // 5
 * search([1,2,3,4,5,6], 11) // -1
 *
 */

function search(arr = [], value) {
  if (arr.length == 0 || !value) return -1;

  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (currentElement < value) min = middle + 1;
    else if (currentElement > value) max = middle - 1;
    else return middle;
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 3));
