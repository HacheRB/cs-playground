// https://leetcode.com/problems/group-anagrams/

// Solution #1 - Brute Force - Nested For Loop
// Time Complexity O(n * KlogK)
// Space Complexity O(2n) = O(n)

var solution1 = function (strs) {
  let anagrams = new Map()

  for (let string of strs) {
    let sortedString = sortStringByCharacters(string)
    if (anagrams.has(sortedString)) {
      let arr = anagrams.get(sortedString)
      arr.push(string)
      anagrams.set(sortedString, arr)
    } else {
      anagrams.set(sortedString, [string])
    }
  }
  return anagramsArray(anagrams)
}

var sortStringByCharacters = function (str) {
  return str.split('').sort().join('')
}

var anagramsArray = function (map) {
  let results = []

  for (let anagrams of map) {
    results.push(anagrams[1])
  }
  return results
}

// Solution #2 -Brute Force - Same as Solution1 but cleaner
// Time Complexity O(n * KlogK)
// Space Complexity O(2n) = O(n)

var solution2 = function (strs) {
  let m = new Map()
  for (let string of strs) {
    let sorted = string.split('').sort().join('')
    if (m.has(sorted)) m.set(sorted, [...m.get(sorted), string])
    else m.set(sorted, [string])
  }
  return Array.from(m.values())
}

// Solution #3 - Leetcode Approach 2 : Categorize by Count
// Time Complexity O(n * k)
// Space Complexity O(n)

var solution3 = function (strs) {
  let res = {}
  for (let str of strs) {
    let count = new Array(26).fill(0)
    for (let char of str) count[char.charCodeAt() - 97]++
    let key = count.join('#')
    res[key] ? res[key].push(str) : (res[key] = [str])
  }
  return Object.values(res)
}

let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
// let strs = ['']
// let strs = ['a']

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(strs))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(strs))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #3')
const t4 = performance.now()
console.log(solution3(strs))
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')
