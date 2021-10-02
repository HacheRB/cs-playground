// https://leetcode.com/problems/intersection-of-two-arrays-ii/

// Solution #1 - Hash Map
// Time Complexity O(n + m)
// Space Complexity O(n) - smaller array
var solution1 = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return solution1(nums2, nums1)
  }

  let nums1Map = new Map()
  let intersection = []

  for (let num of nums1) {
    nums1Map[num] = (nums1Map[num] || 0) + 1
  }

  for (let num of nums2) {
    if (nums1Map[num] > 0) {
      nums1Map[num]--
      intersection.push(num)
    }
  }
  return intersection
}

// Solution #2 - LeetCode Solution - Sort
// Time Complexity O()
// Space Complexity O()
var solution2 = function (nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  let i = 0
  let j = 0
  let k = 0

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      ++i
    } else if (nums1[i] > nums2[j]) {
      ++j
    } else {
      nums1[k++] = nums1[i++]
      ++j
    }
  }
  return nums1.slice(0, k)
}

// let nums1 = [1, 2, 2, 1]
// let nums2 = [2, 2]
let nums1 = [4, 9, 5]
let nums2 = [9, 4, 9, 8, 4]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums1, nums2))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(nums1, nums2))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
