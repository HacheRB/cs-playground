// https://leetcode.com/problems/max-consecutive-ones/

// Solution #1 - for loop
// Time Complexity O(n)
// Space Complexity O(1)
var solution1 = function (nums) {
  let count = 0
  let maxCount = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++
    else {
      maxCount = Math.max(count, maxCount)
      count = 0
    }
  }
  return Math.max(count, maxCount)
}

let nums = [1, 1, 0, 1, 1, 1]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
