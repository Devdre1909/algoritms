/**
 * Return the index of first element found to ba equal to the passed item
 *
 * @param {*} [array=[]]
 * Array to search through
 * @param {*} item
 * Item to search for
 *
 * @returns the index first item of the given array that is equal to the item passed, -1 if none
 */
function search(array = [], item) {
  if (array.length === 0) return -1;
  for (let index = 0; index < array.length; index++) {
    if (array[index] === item) return index;
  }
  return -1;
}

module.exports = search;
