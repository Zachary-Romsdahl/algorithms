/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  isNegative = x < 0 ? true : false;
  x = isNegative ? -x : x;
  let result = 0;
  let rightDigit;
  while (x > 0) {
    rightDigit = x % 10;
    x = Math.floor(x / 10);
    result *= 10;
    result += rightDigit;
  }
  if (result >= 2 ** 31) {
    return 0;
  }
  result = isNegative ? -result : result;
  return result;
};
