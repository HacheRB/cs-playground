/* Recursion 
Useful to break a large difficult problem into smaller ones.

An example would be sorting a really big array. We would break it into two smaller arrays, then repeat the process with the new arrays until they are sorted. This would be how merge sort works.

A typical recursion problem would be the fibonacci sequence.

Always set your base case first, so that your recursive function has a stop condition.

*/

// Fibonnaci Sequence
// Time Complexity O(2^n)
// Space Complexity O(n)

var fibonacci = function (n) {
  if (n === 1 || n === 2) return 1
  if (n === 0) return 0

  return fibonacci(n - 1) + fibonacci(n - 2)
}

// Iterated Fibonacci
// Time Complexity O(n)
// Space Complexity O(1)

var iteratedFibonacci = function (n) {
  const sequence = [0, 1]
  for (let i = 2; i < n + 1; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1])
  }
  return sequence[n]
}

// Memoized Fibonacci
// Time Complexity O(n)
// Space Complexity O(1)

var memoizedFibonacci = function (n, memoized = [0, 1, 1]) {
  if (memoized[n]) {
    return memoized[n]
  }
  memoized[n] =
    memoizedFibonacci(n - 1, memoized) + memoizedFibonacci(n - 2, memoized)
  return memoized[n]
}

let n = 32

console.log('Fibonnaci')
const t0 = performance.now()
console.log(fibonacci(n))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Iterated Fibonnaci')
const t2 = performance.now()
console.log(iteratedFibonacci(n))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')

console.log('Memoized Fibonnaci')
const t4 = performance.now()
console.log(memoizedFibonacci(n))
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')

// Nested Addition - Recursion
// Time Complexity O(nk) probably, K would be the depth of the nested arrays/size of subarrays
// Space Complexity O(n) probably

var nestedAddition = function (nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] === 'number') {
      sum += nums[i]
    } else {
      sum += nestedAddition(nums[i])
    }
  }
  return sum
}

let nums = [1, 2, 3, 4, 5, [6, 7, 8], 9, [[10, 11], 13, [14]]]

console.log('Nested Addition')
const t6 = performance.now()
console.log(nestedAddition(nums))
const t7 = performance.now()
console.log(`Took ${t7 - t6} milliseconds.`)
console.log('--------------------------------------')

// Factorial - Recursion
// Time Complexity O()
// Space Complexity O(n) probably

var factorial = function (m) {
  if (m <= 1) return 1
  return m * factorial(m - 1)
}

let m = 8

console.log('Factorial')
const t8 = performance.now()
console.log(factorial(m))
const t9 = performance.now()
console.log(`Took ${t9 - t8} milliseconds.`)
console.log('--------------------------------------')
