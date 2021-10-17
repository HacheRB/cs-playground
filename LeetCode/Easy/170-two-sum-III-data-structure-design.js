// https://leetcode.com/problems/two-sum-iii-data-structure-design/

// Solution #1
// Time Complexity O()
// Space Complexity O()

class TwoSum {
  constructor() {
    this.map = new Map()
  }
  add(number) {
    this.map.set(number, this.map.get(number) + 1 || 1)
  }
  find(value) {
    for (const num of this.map.keys()) {
      const rest = value - num
      if (rest === num) {
        if (this.map.get(num) > 1) return true
        else continue
      } else if (this.map.has(rest)) return true
    }
    return false
  }
}

// Solution #2
// Time Complexity O()
// Space Complexity O()

var solution2 = function () {}

// Solution #3
// Time Complexity O()
// Space Complexity O()

var solution3 = function () {}

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1())
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2())
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #3')
const t4 = performance.now()
console.log(solution3())
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')
