/**
 *
 * Count from any positive number to 1
 * prints each number
 */

function countDown(number) {
  if (number <= 0) {
    console.log("All done");
    return;
  }
  console.log(number);
  number -= 1;
  countDown(number);
}

countDown(10);
