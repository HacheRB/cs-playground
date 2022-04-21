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
	let currentNode = head
	let nextNode = null
	let previousNode = null

	while (currentNode) {
		//Save next node
		nextNode = currentNode.next
		//reverse the nodes
		currentNode.next = previousNode
		//Move previous and current forward.
		previousNode = currentNode
		currentNode = nextNode
	}
	return previousNode
}
