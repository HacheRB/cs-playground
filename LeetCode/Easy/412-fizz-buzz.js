// https://leetcode.com/problems/fizz-buzz/

// Solution #1
// Time Complexity O(n)
// Space Complexity O(1)
var solution1 = function (n) {
  let answer = []
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      answer.push('FizzBuzz')
    } else if (i % 3 === 0) {
      answer.push('Fizz')
    } else if (i % 5 === 0) {
      answer.push('Buzz')
    } else {
      answer.push(i.toString())
    }
  }
  return answer
}

const n = 15

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1())
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
