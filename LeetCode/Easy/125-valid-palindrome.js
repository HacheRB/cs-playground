// https://leetcode.com/problems/valid-palindrome/

// Solution #1 -
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (s) {
  s = s.toLowerCase()
  s = s.replace(/[^A-Za-z0-9]/g, '')
  return s === s.split('').reverse().join('')
}

// Solution #2 - 2 Pointers
// Time Complexity O(n)
// Space Complexity O(1)

var solution2 = function (s) {
  s = s.toLowerCase()
  s = s.replace(/[^A-Za-z0-9]/g, '')

  let start = 0
  let end = s.length - 1
  while (start < end) {
    if (s[start] !== s[end]) return false
    start++
    end--
  }
  return true
}

// let s = 'A man, a plan, a canal: Panama'
let s = 'racecar'
// let s = ' '

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
