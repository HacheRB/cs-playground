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

//Solution #3
// Time Complexity O()
// Space Complexity O()
var solution3 = function () {}

let arr = [10, 2, 5, 3]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(arr))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

let arr2 = [7, 1, 14, 11]

console.log('Solution #2')
const t2 = performance.now()
console.log(solution1(arr2))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')

let arr3 = [3, 1, 7, 11]

console.log('Solution #3')
const t4 = performance.now()
console.log(solution1(arr3))
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')

let arr4 = [-2, 0, 10, -19, 4, 6, -8]

console.log('expect false')
const t6 = performance.now()
console.log(solution1(arr4))
const t7 = performance.now()
console.log(`Took ${t7 - t6} milliseconds.`)
console.log('--------------------------------------')
