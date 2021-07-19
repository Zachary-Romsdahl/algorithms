/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) return "";
  let prefixes = {};
  for (let i = 0; i <= strs[0].length; i++) {
    prefixes[strs[0].slice(0, i)] = 1;
  }

  for (let i = 1; i < strs.length; i++) {
    let str = strs[i];
    for (let key in prefixes) {
      if (str.startsWith(key)) {
        prefixes[key]++;
      } else {
        delete prefixes[key];
      }
    }
  }
  let max = "";
  for (let key in prefixes) {
    if (key.length > max.length) max = key;
  }
  return max;
};
