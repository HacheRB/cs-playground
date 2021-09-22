/* Sliding Window Pattern
Creates a window which can be an array or number from one position to another. Depending on a certain condition, the window increases or closes(and a new window is created)

Is very useful for keeping track of a subset of data in an array/string etc. */

/* maxSubarraySum
Write a function that accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. */

// Solution #1 - Brute Force - Nested For Loop
// Time Complexity O(n^2)
// Space Complexity O(1)

var naiveMaxSubArraySum = function (nums, n) {
  if (n > nums.length) {
    return null
  }
  var max = -Infinity

  for (let i = 0; i < nums.length - n + 1; i++) {
    temp = 0
    for (let j = 0; j < n; j++) {
      temp += nums[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}

// Solution #2 - Sliding Window
// Time Complexity O(n)
// Space Complexity O(1)
var maxSubArraySum = function (nums, n) {
  let max = 0
  let temp = 0
  if (nums.length < n) return null
  for (let i = 0; i < n; i++) {
    max += nums[i]
  }
  temp = max
  for (let i = n; i < nums.length; i++) {
    temp = temp - nums[i - n] + nums[i]
    max = Math.max(max, temp)
  }
  return max
}

let nums = [1, 2, 5, 2, 8, 1, 5]
let n = 2
// let nums = [4, 2, 1, 6, 2]
// let n = 4
// let nums = []
// let n = 4

console.log('Solution #1')
const t2 = performance.now()
console.log(naiveMaxSubArraySum(nums, n))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t4 = performance.now()
console.log(maxSubArraySum(nums, n))
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')
