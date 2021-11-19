// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Solution #1 - Brute Force - Time Limit Exceeded
// Time Complexity O(n^2)
// Space Complexity O(1)

var solution1 = function (prices) {
  let maximumProfit = 0

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i]
      if (profit > maximumProfit) {
        maximumProfit = profit
      }
    }
  }
  return maximumProfit
}

// Solution #2 - One Pass
// Time Complexity O(n)
// Space Complexity O(1)

var solution2 = function (prices) {
  let minimumPrice = prices[0]
  let maximumProfit = 0

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minimumPrice) {
      minimumPrice = prices[i]
    } else if (prices[i] - minimumPrice > maximumProfit) {
      maximumProfit = prices[i] - minimumPrice
    }
  }
  return maximumProfit
}

let prices = [7, 1, 5, 3, 6, 4]
// let prices = [7, 6, 4, 3, 1]

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(prices))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')

console.log('Solution #2')
const t2 = performance.now()
console.log(solution2(prices))
const t3 = performance.now()
console.log(`Took ${t3 - t2} milliseconds.`)
console.log('--------------------------------------')
