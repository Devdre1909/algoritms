/*
 * Using Divide and Conquer
 *
 * Given a unsorted array of integers, write a function
 * called max, that return the max value in the given array
 *
 * max([4,2,1,9,10, 3]) // 10
 * max([5,2,1,6,7,2]) // 7
 * max([]) // 0
 *
 */

function maxLinear(arr = []) {
  if (arr.length === 0) return 0;
  let max = -Infinity;
  for (const el of arr) {
    max = Math.max(el, max);
  }
  return max;
}

function maxSmart(arr = []) {
  if (arr.length === 0) return 0;
  return Math.max(...arr);
}

function maxDoublePointers(arr = []) {
  if (arr.length === 0) return 0;
  let left = 0;
  let right = arr.length - 1;
  let max = -Infinity;

  while (left <= right) {
    max = Math.max(arr[left], arr[right], max);
  }
}
