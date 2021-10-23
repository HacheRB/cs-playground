// https://leetcode.com/problems/search-in-rotated-sorted-array/

// Solution #1 - Binary Search
// Time Complexity O(log n)
// Space Complexity O(1)

var solution1 = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2)

    if (nums[middle] === target) return middle

    if (nums[left] <= nums[middle]) {
      if (nums[left] <= target && target < nums[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    } else {
      if (target > nums[middle] && target <= nums[right]) {
        left = middle + 1
      } else {
        right = middle - 1
      }
    }
  }
  return -1
}

// Solution #3
// Time Complexity O()
// Space Complexity O()

var solution3 = function (nums, target) {}

// let nums = [4, 5, 6, 7, 0, 1, 2]
// let target = 0
// let nums = [4,5,6,7,0,1,2]
// let target = 3
// let nums = [1]
// let target = 0
let nums = [1, 3]
let target = 1

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums, target))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
