// https://leetcode.com/problems/jewels-and-stones/

// Solution #1 - Hash Map
// Time Complexity O(n + m) n is jewels, m is stones
// Space Complexity O(n)

var solution1 = function (jewels, stones) {
  let count = 0
  let jewelsMap = new Map()

  for (let jewel of jewels) {
    jewelsMap.set(jewel)
  }

  for (let stone of stones) {
    if (jewelsMap.has(stone)) {
      count++
    }
  }
  return count
}

// Solution #2 - Brute Force
// Time Complexity O(n*m)
// Space Complexity O(1)

var solution2 = function (jewels, stones) {
  let count = 0

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] === jewels[j]) {
        count++
      }
    }
  }
  return count
}

// Solution #3
// Time Complexity O()
// Space Complexity O()

let jewels = 'aA'
let stones = 'aAAbbbb'
// let jewels = "z"
// let stones = "ZZ"

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(jewels, stones))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(jewels, stones))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
