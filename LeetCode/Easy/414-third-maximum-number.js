// https://leetcode.com/problems/third-maximum-number/

// Solution #1 - Set
// Time Complexity O(n)
// Space Complexity O(n)
var solution1 = function (nums, k = 3) {
  let set = new Set(nums)

  if (set.size < 3) return Math.max(...set)
  if (set.size === 3) return Math.min(...set)

  for (let i = 0; i < k - 1; i++) {
    // we could use a variable K
    set.delete(Math.max(...set))
  }
  return Math.max(...set)
}

//Solution #2 - 3 Maximums using a Set
// Time Complexity O(n)
// Space Complexity O(1)
var solution2 = function (nums) {
  let maxSet = new Set()

  for (let num of nums) {
    maxSet.add(num)
    if (maxSet.size > 3) {
      maxSet.delete(Math.min(...maxSet))
    }
  }
  if (maxSet.size === 3) {
    return Math.min(...maxSet)
  }
  return Math.max(...maxSet)
}

// let nums = [3, 2, 1]
// let nums = [1, 2]

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
