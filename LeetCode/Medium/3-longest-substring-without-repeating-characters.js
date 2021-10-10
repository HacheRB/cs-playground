// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// Solution #1 - Sliding Window
// Time Complexity O()
// Space Complexity O()

var solution1 = function (s) {
  let subString = new Set()
  let left = 0
  let right = 0
  let longest = 0

  while (right < s.length) {
    if (!subString.has(s[right])) {
      subString.add(s[right])
      longest = Math.max(longest, subString.size)
      right++
    } else {
      subString.delete(s[left])
      left++
    }
  }
  return longest
}

var solution3 = function (s) {}

// let s = 'abcabcbb'
// let s = 'bbbbb'
// let s = 'pwwkew'
let s = ' '

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(s))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
