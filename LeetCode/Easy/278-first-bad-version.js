// https://leetcode.com/problems/first-bad-version/

// Solution #1 - for loop
// Time Complexity O(n)
// Space Complexity O(1)
var solution1 = function (isBadVersion) {
  return function (n) {
    for (let i = 0; i < n; i++) {
      if (isBadVersion(i)) {
        return i
      }
    }
    return n
  }
}

// Solution #2 - Binary Search
// Time Complexity O(log n)
// Space Complexity O(1)
var solution2 = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1
    let right = n
    while (left < right) {
      const middle = Math.floor((left + right) / 2)
      if (isBadVersion(middle)) {
        right = middle
      } else {
        left = middle + 1
      }
    }
    return left
  }
}
