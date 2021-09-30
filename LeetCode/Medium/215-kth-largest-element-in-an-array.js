// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Solution #1 - Brute Force
// Time Complexity O(k*3n) = (k*n) ?
// Space Complexity O() ? Would depend on JS Methods.

var solution1 = function (nums, k) {
  for (let i = 0; i < k - 1; i++) {
    let max = Math.max(...nums)
    let pos = nums.indexOf(max)
    nums.splice(pos, 1)
  }
  return Math.max(...nums)
}

//Solution #2 - sort
// Time Complexity O(n log n) Because of JS Sort Implementation
// Space Complexity O(1)

var solution2 = function (nums, k) {
  nums.sort((a, b) => a - b)
  return nums[nums.length - k]
}

// let nums = [3, 2, 1, 5, 6, 4]
// let k = 2
let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
let k = 4

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums, k))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

let nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6]

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(nums2, k))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
