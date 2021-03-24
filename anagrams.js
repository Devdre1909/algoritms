/**
 *
 * Anagrams
 *
 * Given two strings, write a function to determine if the
 * second string is an anagram of the first. An anagram is
 * a wor, phrase, or  name formed by rearranging the
 * letter of another, such as cinema, form from iceman
 *
 * validAnagram('','') // true
 * validAnagram('aaz','zza') // false
 * validAnagram('anagram','nagaram') // true
 * validAnagram('rat','cat') // false
 * validAnagram('awesome','awesom') // false
 * validAnagram('qwerty','qeywrt') // true
 * validAnagram('texttwisttime','timewisttext') // true
 *
 */

function validAnagram(str1 = "", str2 = "") {
  if (str1.length !== str2.length) return false;
  let str1Freq = {};
  let str2Freq = {};
  for (const letter of str1) {
    str1Freq[letter] = (str1Freq[letter] || 0) + 1;
  }
  for (const letter of str2) {
    str2Freq[letter] = (str2Freq[letter] || 0) + 1;
  }

  for (const key in str1Freq) {
    // Check if a letter in str1 is available in str2
    if (!Object.hasOwnProperty.call(str2Freq, key)) return false;
    if (str1Freq[key] !== str2Freq[key]) return false;
  }
  return true;
}

function refactorValidAnagram(str1 = "", str2 = "") {
  if (str1.length !== str2.length) return false;
  let lookup = {};
  for (const letter of str1) {
    lookup[letter] = (lookup[letter] || 0) + 1;
  }
  for (const letter of str2) {
    // Check if lookup (str1) don't contains present valid of str2
    if (!lookup[letter]) return false;
    lookup[letter] -= 1;
  }
  return true;
}

module.exports = { refactorValidAnagram, validAnagram };
