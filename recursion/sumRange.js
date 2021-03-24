/**
 *
 * Write a re
 *
 */

function sumArran(num) {
  if (num === 1) return 1;
  return num + sumArran(num - 1);
}

sumArran(3);

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
