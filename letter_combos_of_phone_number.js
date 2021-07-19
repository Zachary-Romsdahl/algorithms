/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") return [];
  let combos = [];
  let c = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let recurse = (index, strSoFar) => {
    if (index >= digits.length) {
      combos.push(strSoFar);
      return;
    }
    let str = c[digits[index]];
    for (let i = 0; i < str.length; i++) {
      recurse(index + 1, strSoFar + str[i]);
    }
  };
  recurse(0, "");
  return combos;
};
