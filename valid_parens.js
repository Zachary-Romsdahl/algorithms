/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    console.log(stack);
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
      let last = stack[stack.length - 1];
      if (last === "(" && s[i] === ")") {
        stack.pop();
      } else if (last === "[" && s[i] === "]") {
        stack.pop();
      } else if (last === "{" && s[i] === "}") {
        stack.pop();
      } else return false;
    }
  }
  if (stack.length !== 0) return false;
  return true;
};
