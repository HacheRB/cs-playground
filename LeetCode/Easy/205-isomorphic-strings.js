// https://leetcode.com/problems/isomorphic-strings/

// Solution #1
// Time Complexity O(n)
// Space Complexity O(n)

var solution1 = function (s, t) {
  let map = new Map()
  let set = new Set()

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i]
    let tChar = t[i]

    if (map.has(sChar)) {
      if (map.get(sChar) !== tChar) return false
    } else {
      if (set.has(tChar)) return false
      map.set(sChar, tChar)
      set.add(tChar)
    }
  }
  return true
}

// let s = 'egg'
// let t = 'add'
// let s = 'foo'
// let t = 'bar'
let s = 'paper'
let t = 'title'

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1())
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
