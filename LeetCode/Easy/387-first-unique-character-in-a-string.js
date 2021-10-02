// https://leetcode.com/problems/first-unique-character-in-a-string/

// Solution #1
// Time Complexity O(2n) = O(n)
// Space Complexity O(n)

var solution1 = function (s) {
  let numberOfChars = new Map()

  for (let char of s) {
    numberOfChars[char] = (numberOfChars[char] || 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (numberOfChars[char] === 1) {
      return i
    }
  }
  return -1
}

// Solution #2 - LeetCode User Solution
// Time Complexity O(n^2) if .includes is O(n)
// Space Complexity O(n)

var solution2 = function (s) {
  const listOfNotUnique = new Set()

  for (let i = 0; i < s.length; i++) {
    if (!listOfNotUnique.has(s[i]) && !s.includes(s[i], i + 1)) {
      return i
    }
    listOfNotUnique.add(s[i])
  }
  return -1
}

let s = 'leetcode'
// let s = 'loveleetcode'
// let s = 'aabb'

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(s))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(s))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
