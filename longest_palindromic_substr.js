/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s) return null;
  // Pointers
  let l = 0;
  let r = s.length - 1;
  //longest palindrome is initially just the first letter
  let lp = s[0];
  while (l < r) {
    // check if s[l] and s[r] are equal
    if (s[l] === s[r]) {
      let tempL = l,
        tempR = r;
      let isPalindrome = true;
      while (tempL < tempR) {
        if (s[tempL] !== s[tempR] || r - l + 1 < lp.length) {
          isPalindrome = false;
          break;
        }
        tempL++;
        tempR--;
      }
      if (isPalindrome && r - l + 1 > lp.length) {
        lp = s.slice(l, r + 1);
      }
    }
    // if they are equal then create tempL and tempR to check that it is a palindrome
    // if it is a palindrome then compare length and set to new longesPalindrome if it is
    // if s[tempL] and s[tempR] aren't equal break out and continue search
    if (l + 1 === r || l === r || r - l + 1 < lp.length) {
      l++;
      r = s.length - 1;
    } else if (r - l + 1 > lp.length) {
      r--;
    } else {
      l++;
      r = s.length - 1;
    }
    //if r-l > lp --> r --
    // else --> l ++ and r = s.length - 1
  }
  return lp;
};
