/* Frequency Counter Pattern
Uses Objects/sets/maps to collect values/frequencies.
This can avoid nested loops or O(n^2) operations with arrays/strings.

This function returns true if every value in the first array has it's corresponding value squared in the second array. If lengths are different, returns false. */

// Solution #1
// Time Complexity O(n + n + n) = O(3n) = O(n)
// Space Complexity O(2n) = O(n)

var solution1 = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }

  // console.log(frequencyCounter1)
  // console.log(frequencyCounter2)
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

let arr1 = [1, 2, 3, 2, 5]
let arr2 = [9, 1, 4, 4, 11]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(arr1, arr2))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

/* Anagram Example
Given 2 strings write a f() to determine if the second string is an anagram of the first. Only lowercase and no spaces */
// Time Complexity O(n + n + n) = O(3n) = O(n)
// Space Complexity O(2n) = O(n)

var validAnagram = function (first, second) {
  if (first.length !== second.length) {
    return false
  }

  const lookup = {}

  for (let i = 0; i < first.length; i++) {
    let letter = first[i]
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1)
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i]
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}

let str1 = 'anagram'
let str2 = 'gramana'

console.log('validAnagram')
const t2 = performance.now()
console.log(validAnagram(str1, str2))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
