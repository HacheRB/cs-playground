//https://leetcode.com/problems/search-insert-position/

// Solution #1 - Binary Search
// Time Complexity O(log n)
// Space Complexity O(1)

var solution1 = function (nums, target) {
  return binarySearchHelper(nums, target, 0, nums.length - 1)
}

function binarySearchHelper(array, target, left, right) {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle]
    if (target === potentialMatch) {
      return middle
    } else if (target < potentialMatch) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return left
}

let nums = [1, 3, 5, 6]
let target = 5

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums, target))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
