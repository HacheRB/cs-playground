//https://leetcode.com/problems/reverse-string/

// Solution #1 - .reverse()
// Time Complexity O(n)
// Space Complexity O(1)

var solution = function (s) {
  s = s.reverse()
}

//Solution #2 - For Loop
// Time Complexity O(n)
// Space Complexity O(n)

var solution2 = function (s) {
  let reversed = []
  for (let char of s) {
    reversed.unshift(char)
  }
  return reversed
}

//Solution #3 - Reduce, not in place
// Time Complexity O(n)
// Space Complexity O(1)

var solution3 = function (s) {
  return s.reduce((rev, char) => char + rev, '').split('')
}

//Solution #4 - Two Pointers
// Time Complexity O(n)
// Space Complexity O(1)

var solution4 = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    let temp = s[left]
    s[left++] = s[right]
    s[right--] = temp
  }
  return s
}

let s = ['h', 'e', 'l', 'l', 'o']

console.log('Solution #1')
const t0 = performance.now()
console.log(solution(s))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

s = ['h', 'e', 'l', 'l', 'o']

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(s))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')

s = ['h', 'e', 'l', 'l', 'o']

console.log('Solution #3')
const t4 = performance.now()
console.log(solution3(s))
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #4')
const t6 = performance.now()
console.log(solution4(s))
const t7 = performance.now()
console.log(`Took ${t7 - t6} milliseconds.`)
console.log('--------------------------------------')
