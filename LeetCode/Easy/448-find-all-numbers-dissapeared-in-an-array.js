// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// Solution #1 - Set
// Time Complexity O(n)
// Space Complexity O(n)

var solution1 = function (nums) {
  let set = new Set(nums)
  let max = Math.max(...nums)
  let missing = []

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      missing.push(i)
    }
  }
  return missing
}

// Solution #2 - LeetCode Solution - O(1) Space In Place Modification
// Time Complexity O(2n) = O(n)
// Space Complexity O(1)
var solution2 = function (nums) {
  // Iterate over each of the elements in the original array
  for (let i = 0; i < nums.length; i++) {
    // Treat the value as the new index
    let newIndex = Math.abs(nums[i]) - 1
    // Check the magnitude of value at this new index
    // If the magnitude is positive, make it negative
    // thus indicating that the number nums[i] has
    // appeared or has been visited.
    if (nums[newIndex] > 0) {
      nums[newIndex] *= -1
    }
  }
  // Response array that would contain the missing numbers
  let result = []
  // Iterate over the numbers from 1 to N and add all those
  // that have positive magnitude in the array
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > 0) {
      result.push(i)
    }
  }

  return result
}

// Solution #3
// Time Complexity O()
// Space Complexity O()
var solution3 = function () {}

let nums = [4, 3, 2, 7, 8, 2, 3, 1]
// let nums = [1, 1]

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

console.log('Solution #3')
const t4 = performance.now()
console.log(solution3())
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')
