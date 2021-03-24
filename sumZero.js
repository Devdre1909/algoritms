/**
 *
 * sumZero
 *
 * Write a function called sumZero which accept a sorted
 * array of integers. The function should find the first
 * pair where the sum is 0. Return an array that includes
 * both values that sum to zero or undefined if a pair does not exist
 *
 * sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 * sumZero([-2,0,1,3]) // undefined
 * sumZero([1,2,3]) // undefined
 * sumZero([-3,-2,0,1,2,5])
 */

function sumZero(arr = []) {
  if (arr.length === 0) return undefined;
  let pointerB = arr.length - 1;
  for (let pointerA = 0; pointerA <= pointerB; ) {
    if (pointerA === pointerB) return undefined;
    let calc = arr[pointerA] + arr[pointerB];
    if (calc === 0) return [arr[pointerA], arr[pointerB]];
    else if (calc > 0) pointerB--;
    else pointerA++;
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
