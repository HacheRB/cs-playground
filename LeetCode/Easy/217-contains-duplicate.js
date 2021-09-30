// https://leetcode.com/problems/contains-duplicate/

// Solution #1 - For Loop
// Time Complexity O(n)
// Space Complexity O(n)

var solution1 = function (nums) {
  let set = new Set(nums)
  if (set.size < nums.length) return true
  return false
}

// Solution #2 - Hash Map
// Time Complexity O(n)
// Space Complexity O(n)

var solution2 = function (nums) {
  const hashMap = {}
  for (let num of nums) {
    if (!hashMap[num]) {
      hashMap[num] = 1
    } else {
      return true
    }
  }
  return false
}

let nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

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
