/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      let sum = nums[l] + nums[i] + nums[r];
      if (Math.abs(target - sum) < Math.abs(closest)) {
        closest = target - sum;
      }
      if (sum < target) {
        l += 1;
      } else {
        r -= 1;
      }
    }
  }
  return target - closest;
};
