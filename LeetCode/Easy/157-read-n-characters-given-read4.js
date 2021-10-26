// https://leetcode.com/problems/read-n-characters-given-read4/

// Solution #1
// Time Complexity O()
// Space Complexity O()

/**
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution1 = function (read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function (buf, n) {
    let eof = false //eof = end of file
    let storedCharacters = 0
    let tempBuffer = []

    while (!eof && storedCharacters < n) {
      let count = read4(tempBuffer)
      eof = count < 4
      count = Math.min(count, n - storedCharacters)

      for (let i = 0; i < count; i++) {
        buf[storedCharacters++] = tempBuffer[i]
      }
    }
    return storedCharacters
  }
}
