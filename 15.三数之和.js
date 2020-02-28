/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 方法一： 暴力法
 * 时间复杂度O(n^3)
 */
var threeSum = function(nums) {
  const len = nums.length;
  let res =  [];
  for (let i = 0; i < len - 2; i++ ) {
    for (let j = i + 1; j < len - 1; j++ ) {
      for (let k = j + 1; k < len; k++ ) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          res.push([nums[i], nums[j], nums[k]])
        }
      }
    } 
  }
  return res;
};

/**
 * 方法二： 转换为两数之和：
 * a + b + c = 0 => a + b = -c
 * 时间复杂度：O(n^2)
 */
var threeSum1 = function (nums) {
  const len = nums.length;
  let arr = [];
  if (nums == null || len < 3) return arr;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++ ) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let L = i + 1;
    let R = len - 1;
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {
        arr.push([nums[i], nums[L], nums[R]])
        while (nums[L] == nums[L+1]) L++;
        while (nums[R] == nums[R-1]) R--;
        L++;
        R--;
      } else if (sum > 0) {
        R--;
      } else if (sum < 0){
        L++;
      }
    }
  }
  return arr;
}

