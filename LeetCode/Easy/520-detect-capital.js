// https://leetcode.com/problems/detect-capital/

// Solution #1
// Time Complexity O(n)
// Space Complexity O(1)

var solution1 = function (word) {
  let case1 = true
  let case2 = true
  let case3 = true

  //Check Case 1
  for (let i = 0; i < word.length; i++) {
    if (!(word[i] === word[i].toUpperCase())) {
      case1 = false
      break
    }
  }
  if (case1) return 'case 1 true'

  // Check Case 2
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      case2 = false
      break
    }
  }
  if (case2) return 'case 2 true'

  // Check Case 3
  if (!(word[0] === word[0].toUpperCase())) case3 = false
  if (case3) {
    for (let i = 1; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
        case3 = false
        break
      }
    }
  }
  if (case3) return 'case 3 true'
  return false
}

// Solution #2
// Time Complexity O()
// Space Complexity O()

var solution2 = function (word) {
  if (word.length === 1) {
    return true
  }
  if (word[0] === word[0].toUpperCase() && word[1] === word[1].toUpperCase()) {
    for (let i = 2; i < word.length; i++) {
      if (word[i] === word[i].toLowerCase()) {
        return false
      }
    }
  } else {
    for (let i = 1; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
        return false
      }
    }
  }
  return true
}

// Some LeetCode user solutions
// Solution #3
// Time Complexity O(n)
// Space Complexity O(1)

var solution3 = function (word) {
  if (word.toUpperCase() === word) {
    return true
  }

  if (word.toLowerCase() === word) {
    return true
  }

  if (
    word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase() ===
    word
  ) {
    return true
  }

  return false
}

// Solution #4
// Time Complexity O(n)
// Space Complexity O(1)

var solution4 = function (word) {
  return (
    word === word.toUpperCase() ||
    word === word[0] + word.substr(1).toLowerCase()
  )
}

let word = 'USA'

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(word))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(word))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #3')
const t4 = performance.now()
console.log(solution3(word))
const t5 = performance.now()
console.log(`Took ${t5 - t4} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #4')
const t6 = performance.now()
console.log(solution4(word))
const t7 = performance.now()
console.log(`Took ${t7 - t6} milliseconds.`)
console.log('--------------------------------------')
