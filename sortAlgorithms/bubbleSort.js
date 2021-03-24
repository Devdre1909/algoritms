function bubbleSort(arr = []) {
  if (arr.length === 0) return arr;
  let swap;
  for (let i = arr.length; i > 0; i--) {
    swap = false;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }

    if (!swap) break;
  }
  return arr;
}

// console.log(bubbleSort([1, 6, 4, 5, 7, 8]));

module.exports = { bubbleSort };

// i = 6
// j = 0

// 0 < 6-1
// arr[j] = 2, arr[j + 1] = 5 | 2 > 5
// NO SWAP
// [2, 5, 6, 1, 4, 3]

// 1 < 6-1
// j = 1
// arr[j] = 5, arr[j + 1] = 6 | 5 > 6
// NO SWAP

// 2 < 6-1
// j = 2
// arr[j] = 6, arr[j + 1] = 1 | 6 > 1
// SWAP
// [2, 5, 1, 6, 4, 3]

// 3 < 6-1
// j = 3
// arr[j] = 6, arr[j + 1] = 4 | 6 > 4
// SWAP
// [2, 5, 1, 4, 6, 3]

// 4 < 6-1
// j = 4
// arr[j] = 6, arr[j + 1] = 3 | 6 > 3
// SWAP[2, 5, 1, 4, 3, 6]

// 5 < 6 - 1
// stop

// i = 5
// ...
