// https://leetcode.com/problems/sqrtx/

// Solution #1 - Built-in Functions
// Time Complexity O(1) ?
// Space Complexity O(1)

var solution1 = function (x) {
  return Math.floor(Math.sqrt(x))
}

// Solution #2 - Binary Search
// Time Complexity O(log n)
// Space Complexity O(1)

var solution2 = function (x) {
  if (x < 2) return x

  let left = 1
  let right = Math.floor(x / 2) + 1
  let mid

  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (mid * mid > x) {
      right = mid - 1
    } else if (mid * mid < x) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return right
}

// Solution #3
// Time Complexity O()
// Space Complexity O()

var solution3 = function (x) {}

// let x = 4
let x = 8

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(x))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(x))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
