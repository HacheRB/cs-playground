// https://leetcode.com/problems/move-zeroes/

// Solution #1
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (nums) {
  let lastNonZero = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZero] = nums[i]
      lastNonZero++
    }
  }
  for (let i = lastNonZero; i < nums.length; i++) {
    nums[i] = 0
  }
}

let nums = [0, 1, 0, 3, 12]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
