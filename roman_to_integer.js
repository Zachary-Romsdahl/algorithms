/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let rosetta = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let integer = 0;
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    let n = s[i + 1];

    if (n !== "" && rosetta[c + n]) {
      integer += rosetta[c + n];
      i += 1;
    } else {
      integer += rosetta[c];
    }
  }
  return integer;
};
