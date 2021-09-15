// https://leetcode.com/problems/pascals-triangle/

// Solution #1
// Time Complexity O(numRows^2)
// Space Complexity O(numRows^2)
var solution1 = function (numRows) {
  let triangle = []

  if (numRows === 0) return triangle
  // Push first row
  triangle.push([1])
  // Outer for loop that iterates through the rows. Starts on the 2nd row.
  for (let i = 1; i < numRows; i++) {
    let previousRow = triangle[i - 1]
    // Create new row and add first 1
    let newRow = []
    newRow.push(1)
    // Check the length of the previous Row to iterate until the penultimate item of the current row. Starts at first position, so always add the current positiion and the previous one
    for (let j = 1; j < previousRow.length; j++) {
      newRow.push(previousRow[j - 1] + previousRow[j])
    }
    newRow.push(1)
    triangle.push(newRow)
  }
  return triangle
}

let numRows = 5

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(numRows))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
