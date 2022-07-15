/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let node = head;
  let prev = null;

  while (node) {
    if (node.val !== val) {
      prev = node;
      node = node.next;
      continue;
    }

    if (!prev) {
      head = node.next;
      node = node.next;
      continue;
    }

    prev.next = node.next;
    node = node.next;
  }

  return head;
};
