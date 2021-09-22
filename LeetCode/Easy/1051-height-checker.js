// https://leetcode.com/problems/height-checker/

// Solution #1 - Compare with a sorted copy.
// Time Complexity O(2n) = O(n)
// Space Complexity O(n)
var solution1 = function (heights) {
  let numberOfIndices = 0
  let sortedHeights = [...heights]
  sortedHeights.sort((a, b) => a - b)

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortedHeights[i]) {
      numberOfIndices++
    }
  }
  return numberOfIndices
}

// let heights = [5, 1, 2, 3, 4]
let heights = [1, 1, 4, 2, 1, 3]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(heights))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
