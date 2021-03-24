function _arrayOfSums(arr = [], sum) {
  if (arr.length === 0) return false;
  let next = arr[0] + arr[1];
  for (let i = 1; i < arr.length; i++) {
    if (next === sum) {
      return true;
    }
    next = next - arr[i - 1] + arr[i + 1];
  }
  return false;
}

function arrayOfSum(arr = [], sum) {
  let 
}

console.log(_arrayOfSums([2, 4, 1, 3, 2], 5));
console.log(_arrayOfSums([1, 2, 3, 4, 5], 8));
console.log(_arrayOfSums([1, 2, 3, 4], 9));

// [2,4,1,3,2], 5 => true
