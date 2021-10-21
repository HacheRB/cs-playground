// https://leetcode.com/problems/find-peak-element/

// Solution #1 - For Loop - Linear Search
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return i
  }
  return nums.length - 1
}

// Solution #2 - Binary Search
// Time Complexity O(log n)
// Space Complexity O(1)

var solution2 = function (nums) {
  return iterativeBinarySearchHelper(nums, 0, nums.length - 1)
}

function iterativeBinarySearchHelper(nums, left, right) {
  while (left < right) {
    const middle = Math.floor((left + right) / 2)

    if (nums[middle] > nums[middle + 1]) {
      right = middle
    } else {
      left = middle + 1
    }
  }
  return left
}

let nums = [1, 2, 3, 1]
// let nums = [1, 2, 1, 3, 5, 6, 4]

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
