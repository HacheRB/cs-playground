// https://leetcode.com/problems/binary-search/

// Solution #1 - Iterative Binary Search
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (nums, target) {
  return iterativeBinarySearchHelper(nums, target, 0, nums.length - 1)
}

function iterativeBinarySearchHelper(nums, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const potentialMatch = nums[middle]
    if (target === potentialMatch) {
      return middle
    } else if (target < potentialMatch) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return -1
}
let nums = [-1, 0, 3, 5, 9, 12]
let target = 9
// let nums = [-1, 0, 3, 5, 9, 12]
// let target = 2

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums, target))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
