// https://leetcode.com/problems/remove-element/

// Solution #1
// Time Complexity O(n^2)
// Space Complexity O(1)

var solution1 = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}

// Solution #2 - In Place Two Pointers
// Time Complexity O(n)
// Space Complexity O(1)

var solution2 = function (nums, val) {
  let i = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]
      i++
    }
  }
  return i
}

let nums = [0, 1, 2, 2, 3, 0, 4, 2]
let val = 2

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums, val))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2]

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(nums2, val))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
