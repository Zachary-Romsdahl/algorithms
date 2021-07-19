/**
 * @param {number[]} nums
 * @return {number}
 */ [1, 1, 2];
var removeDuplicates = function (nums) {
  let i = 0;
  let len = nums.length;
  while (i < len) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      len = nums.length;
    } else {
      i++;
    }
  }
  return len;
};
