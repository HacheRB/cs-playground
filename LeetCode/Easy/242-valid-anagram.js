// https://leetcode.com/problems/valid-anagram/

// Solution #1
// Time Complexity O()
// Space Complexity O()

var solution1 = function (s, t) {
  let sHashMap = buildHashMap(s)
  let tHashMap = buildHashMap(t)

  if (Object.keys(sHashMap).length !== Object.keys(tHashMap).length) {
    return false
  }

  for (let char in sHashMap) {
    if (sHashMap[char] !== tHashMap[char]) {
      return false
    }
  }
  return true
}

function buildHashMap(string) {
  const hashMap = {}
  for (let char of string) {
    hashMap[char] = hashMap[char] + 1 || 1
  }
  console.log('hashmap', hashMap)
  return hashMap
}

// Solution #2
// Time Complexity O()
// Space Complexity O()

var solution2 = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
}

let s = 'rat'
let t = 'car'

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(s, t))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(s, t))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
