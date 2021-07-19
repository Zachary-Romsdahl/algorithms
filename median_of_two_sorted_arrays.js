/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let conc = [...nums1, ...nums2].sort((a, b) => a - b);
  let even = conc.length % 2 === 0 ? true : false;
  if (even) {
    return (conc[conc.length / 2] + conc[conc.length / 2 - 1]) / 2;
  } else {
    return conc[(conc.length - 1) / 2];
  }
};
