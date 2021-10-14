// https://leetcode.com/problems/guess-number-higher-or-lower/

// Solution #1 - Binary Search
// Time Complexity O(log n)
// Space Complexity O(1)

var solution1 = function (n) {
  let left = 1
  let right = n
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    let res = guess(middle)
    if (res == 0) return middle
    else if (res === 1) left = middle + 1
    else right = middle - 1
  }
  return -1
}

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1())
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
