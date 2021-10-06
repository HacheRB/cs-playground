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
