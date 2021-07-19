/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let results = [];
  let recursion = function (left, right, string) {
    if (left === n && right === n) {
      results.push(string);
      return;
    }
    if (left < n) recursion(left + 1, right, string + "(");
    if (right < n && left > right) recursion(left, right + 1, string + ")");
  };

  recursion(0, 0, "");
  return results;
};
