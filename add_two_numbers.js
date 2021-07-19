/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let sums = new ListNode();
  let head = sums;
  let nextDigit = 0;
  while (l1 || l2) {
    v1 = l1 ? l1.val : 0;
    v2 = l2 ? l2.val : 0;
    let sum = v1 + v2 + nextDigit;
    if (sum >= 10) {
      sum -= 10;
      nextDigit = 1;
    } else {
      nextDigit = 0;
    }

    let sumNode = new ListNode(sum);
    sums.next = sumNode;
    sums = sums.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (nextDigit === 1) {
    sums.next = new ListNode(1);
  }
  head = head.next ? head.next : head;
  return head;
};
