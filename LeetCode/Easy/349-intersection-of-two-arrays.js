// https://leetcode.com/problems/intersection-of-two-arrays/

// Solution #1 - Set
// Time Complexity O(n + m) Not sure
// Space Complexity O(n + m) Not sure

var solution1 = function (nums1, nums2) {
  let intersection = []
  let setNums1 = new Set(nums1)
  let setNums2 = new Set(nums2)
  let [smallSet, largeSet] =
    setNums1.length < setNums2.length
      ? [setNums1, setNums2]
      : [setNums2, setNums1]

  smallSet.forEach((n) => {
    if (largeSet.has(n)) {
      intersection.push(n)
    }
  })
  return intersection
}

//Solution #2 - LeetCode Discuss Solution
// Time Complexity O()
// Space Complexity O()

var solution2 = function (nums1, nums2) {
  let setNum1 = new Set(nums1)
  return [...new Set(nums2.filter((num) => setNum1.has(num)))]
}

let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2]

// let nums1 = [4, 9, 5]
// let nums2 = [9, 4, 9, 8, 4]

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
