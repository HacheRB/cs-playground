// https://leetcode.com/problems/maximum-subarray/

// Solution #1 - Kadane's Algorithm
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (nums) {
  let max_current = nums[0]
  let max_global = nums[0]
  for (let i = 1; i < nums.length; i++) {
    max_current = Math.max(nums[i], max_current + nums[i])
    if (max_current > max_global) {
      max_global = max_current
    }
  }
  return max_global
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
