function arrayManipulation(n, queries) {
  let countObj = Array.from(Array(n)).map((e) => 0);
  for (const query of queries) {
    let a = query[0];
    let b = query[1];
    let k = query[2];
    countObj[a - 1] = countObj[a - 1] + k;
    countObj[b] = (countObj[b] || 0) - k;
  }

  let sum = 0;
  let max = 0;
  for (let el of countObj) {
    sum += el;
    max = Math.max(max, sum);
  }

  return max;
}

module.exports = { arrayManipulation };
