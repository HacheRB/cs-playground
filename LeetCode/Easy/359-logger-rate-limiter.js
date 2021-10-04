// https://leetcode.com/problems/logger-rate-limiter/

// Solution #1
// Time Complexity O(1)
// Space Complexity O(n)

var solution1 = function () {
  this.messages = new Map()
}

solution1.prototype.shouldPrintMessage = function (timestamp, message) {
  if (!this.messages.has(message)) {
    this.messages.set(message, timestamp)
    return true
  }
  let oldTimeStamp = this.messages.get(message)
  if (timestamp - oldTimeStamp >= 10) {
    this.messages.set(message, timestamp)
    return true
  } else {
    return false
  }
}

// Solution #2
// Time Complexity O(1)
// Space Complexity O(n)

var solution2 = function () {
  this.messages = new Map()
}

solution2.prototype.shouldPrintMessage = function (timestamp, message) {
  if (this.messages.has(message)) {
    let oldTimeStamp = this.messages.get(message)
    if (timestamp - oldTimeStamp < 10) return false
  }
  this.messages.set(message, timestamp)
  return true
}

// Can't test this one
