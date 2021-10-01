// https://leetcode.com/problems/minimum-index-sum-of-two-lists/

// Solution #1 - Hash Map
// Time Complexity O()
// Space Complexity O()
var solution1 = function (list1, list2) {
  if (list1.length > list2.length) return solution1(list2, list1)

  let common = new Map()
  let minimumSum = +Infinity
  let leastListIndexSum = []

  for (let i = 0; i < list1.length; i++) {
    common.set(list1[i], i)
  }

  for (let i = 0; i < list2.length; i++) {
    let restaurant = list2[i]
    if (common.has(restaurant)) {
      let value = common.get(restaurant) + i
      if (value < minimumSum) {
        minimumSum = value
        leastListIndexSum = []
        leastListIndexSum.push(restaurant)
      } else if (value === minimumSum) {
        leastListIndexSum.push(restaurant)
      }
    }
  }
  return leastListIndexSum
}

let list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']
let list2 = ['KFC', 'Shogun', 'Burger King']

// let list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']
// let list2 = [
//   'Piatti',
//   'The Grill at Torrey Pines',
//   'Hungry Hunter Steakhouse',
//   'Shogun',
// ]

// let list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']
// let list2 = ['KFC', 'Shogun', 'Burger King']
// let list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']
// let list2 = ['KFC', 'Burger King', 'Tapioca Express', 'Shogun']
// let list1 = ['Shogun', 'Tapioca Express', 'Burger King', 'KFC']
// let list2 = ['KNN', 'KFC', 'Burger King', 'Tapioca Express', 'Shogun']
// let list1 = ['KFC']
// let list2 = ['KFC']

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(list1, list2))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
