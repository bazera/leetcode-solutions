/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  let odd = head;
  let even = odd.next;
  let evenSteps;

  while (odd) {
    evenSteps = odd.next;
    odd.next = odd.next?.next;

    if (evenSteps) {
      evenSteps.next = evenSteps.next?.next ? evenSteps.next.next : null;
    }

    if (odd.next) {
      odd = odd.next;
    } else {
      odd.next = even;
      break;
    }
  }

  return head;
};
