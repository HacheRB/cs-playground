// https://leetcode.com/problems/check-if-n-and-its-double-exist/

// Solution #1 - Hash Map
// Time Complexity O(n)
// Space Complexity O(n)
var solution1 = function (arr) {
  const hashMap = {}

  for (let i = 0; i < arr.length; i++) {
    const currValue = arr[i]

    if (hashMap[currValue] !== undefined) {
      return true
    }
    hashMap[currValue / 2] = currValue
    hashMap[currValue * 2] = currValue
  }
  return false
}

//Solution #2 - Set
// Time Complexity O(n)
// Space Complexity O(n)
var solution2 = function (arr) {
  let set = new Set()

  for (let e of arr) {
    if (set.has(e * 2) || set.has(e / 2)) return true
    set.add(e)
  }
  return false
}

let arr = [-2, 0, 10, -19, 4, 6, -8]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(arr))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(arr))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
