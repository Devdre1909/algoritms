function stringSearch(str = "wowomgzomg", letter = "omg") {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < letter.length; j++) {
      if (str[i + j] !== letter[j]) break;
      if (j === letter.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch());
