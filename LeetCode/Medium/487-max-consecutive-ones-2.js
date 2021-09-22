// https://leetcode.com/problems/max-consecutive-ones-ii/

// Solution #1 - Brute Force - Double For Loop
// Time Complexity O(n^2)
// Space Complexity O(1)
var solution1 = function (nums) {
  let maxConsecutive = 0
  for (let i = 0; i < nums.length; i++) {
    let numberOfZeroes = 0
    for (let j = i; j < nums.length; j++) {
      if (nums[j] === 0) {
        numberOfZeroes++
      }
      if (numberOfZeroes <= 1) {
        maxConsecutive = Math.max(maxConsecutive, j - i + 1)
      }
    }
  }
  return maxConsecutive
}

//Solution #2 - Sliding Window
// Time Complexity O(n)?
// Space Complexity O(1)

var solution2 = function (nums) {
  let maxConsecutive = 0
  let numberOfZeroes = 1
  let j = 0 //fastPointer

  for (let i = 0; j < nums.length; j++) {
    if (nums[j] === 0) numberOfZeroes--

    while (numberOfZeroes < 0) {
      if (nums[i] === 0) {
        numberOfZeroes++
      }
      i++
    }
    maxConsecutive = Math.max(maxConsecutive, j - i + 1)
  }
  return maxConsecutive
}

let nums = [1, 0, 1, 1, 0]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(nums))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
