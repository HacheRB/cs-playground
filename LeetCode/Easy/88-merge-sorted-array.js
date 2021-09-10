// https://leetcode.com/problems/merge-sorted-array/

// Solution #1 
// Time Complexity - 
// Space Complexity -

var solution1 = function(nums1, m, nums2, n) {
    nums1.splice(m, nums1.length, ...nums2.slice(0,n))
    nums1.sort((a,b) => a-b)
};

let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3

console.log('Solution #1')
const t0 = performance.now()
console.log(solution1(nums1, m, nums2, n))
const t1 = performance.now()
console.log(`Took ${t1 - t0} milliseconds.`)
console.log('--------------------------------------')
