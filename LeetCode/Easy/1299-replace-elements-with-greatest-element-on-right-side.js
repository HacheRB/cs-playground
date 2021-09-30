// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/

// Solution #1 - In Place
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (arr) {
  if (arr.length < 2) return [-1]

  let greatest = -1

  for (let i = arr.length - 1; i >= 0; i--) {
    const curr = arr[i]
    arr[i] = greatest
    greatest = Math.max(greatest, curr)
  }
  return arr
}

let arr = [17, 18, 5, 4, 6, 1]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(arr))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
