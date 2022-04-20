// https://leetcode.com/problems/reverse-linked-list/

// Solution #1
// Time Complexity O(n)
// Space Complexity O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let prev = null

	while (head) {
		const temp = head.next
		head.next = prev
		prev = head
		head = temp
	}
	return prev
}
