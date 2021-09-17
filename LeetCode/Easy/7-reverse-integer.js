// https://leetcode.com/problems/reverse-integer/

// Solution #1
// Time Complexity O(n)?
// Space Complexity O(n)

var solution1 = function (x) {
  let reversed = x.toString().split('').reverse().join('')
  let parsed = parseInt(reversed) * Math.sign(x)
  if (parsed <= Math.pow(-2, 31) || parsed >= Math.pow(2, 31) - 1) {
    return 0
  } else return parsed
}

let x = 1534236469

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(x))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
