// https://leetcode.com/problems/most-common-word/

// Solution #1
// Time Complexity O(n)
// Space Complexity O(n)
var solution1 = function (paragraph, banned) {
  let sanitizedParagraph = paragraph.replaceAll(/[!?',;.]/g, ' ')
  let wordArray = sanitizedParagraph
    .replaceAll(/\s+/g, ' ')
    .toLowerCase()
    .trim()
    .split(' ')
  let hashTable = {}
  let mostCommonWord = ''
  let max = 0
  for (let word of banned) {
    hashTable[word] = -1
  }
  for (let word of wordArray) {
    if (!hashTable[word]) {
      hashTable[word] = 1
    } else if (hashTable[word] !== -1) {
      hashTable[word]++
    }
    if (max < hashTable[word]) {
      max = hashTable[word]
      mostCommonWord = word
    }
  }
  return mostCommonWord
}

let paragraph = 'a.'
let banned = []

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(paragraph, banned))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')