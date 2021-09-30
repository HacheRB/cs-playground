// https://leetcode.com/problems/happy-number/

// Solution #1 - Hash Map
// Time Complexity O(log n)
// Space Complexity O(log n)

var solution1 = function (n) {
  let nums = new Set()
  nums.add(n)

  while (n > 1) {
    n = sumSquares(n)
    if (nums.has(n)) {
      return false
    }
    nums.add(n)
  }

  return n === 1
}

var sumSquares = function (n) {
  let sum = 0

  while (n > 0) {
    let squaredDigit = (n % 10) ** 2
    sum += squaredDigit
    n = Math.floor(n / 10)
  }

  return sum
}

// Solution #2 - Leetcode Solution - Floyd's Cycle-Finding Algorithm
// Time Complexity O(log n) - Time Limit Exceeded
// Space Complexity O(1)

var solution2 = function (n) {
  let slowPointer = n
  let fastPointer = sumSquares(n)

  while (fastPointer !== 1 && slowPointer !== fastPointer) {
    slowPointer = sumSquares(slowPointer)
    fastPointer = sumSquares(fastPointer)
  }
  return fastPointer === 1
}

let n = 7

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(n))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(n))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
