/**
 *
 * longestUniqueCharacter
 *
 * Write a function that takes a String and returns
 * the longues unique character of the given string,
 * should return empty string is there is no match
 *
 * longestUniqueCharacter('hellothere') // lother
 * longestUniqueCharacter('welcome') // welcome
 * longestUniqueCharacter('character') // racter
 * longestUniqueCharacter('anniversary') // racter
 */

function longestUniqueCharacter(word) {
  let max = "";
  let temp = "";
  let start = 0

  for (let i = 0; i < word.length; i++) {
    temp = temp + word[i]
  }


  return temp.length > max.length ? temp : max;
}

console.log(longestUniqueCharacter("hellothere"));
console.log(longestUniqueCharacter("character"));
