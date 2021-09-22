// https://leetcode.com/problems/max-consecutive-ones-iii/

//Solution #1 - Sliding Window
// Time Complexity O(n)?
// Space Complexity O(1)

var solution1 = function (nums, k) {
  let maxConsecutive = 0
  let j = 0 //fastPointer

  for (let i = 0; j < nums.length; j++) {
    if (nums[j] === 0) k--

    while (k < 0) {
      if (nums[i] === 0) {
        k++
      }
      i++
    }
    maxConsecutive = Math.max(maxConsecutive, j - i + 1)
  }
  return maxConsecutive
}

// let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
// let k = 2
let nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1]
let k = 3

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums, k))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
