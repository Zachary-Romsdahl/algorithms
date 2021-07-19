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
var mergeTwoLists = function (head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  let dummyHead = new ListNode();
  let n3 = dummyHead;
  let n1 = head1,
    n2 = head2;
  while (n1 && n2) {
    if (n1.val <= n2.val) {
      n3.next = n1;
      n3 = n3.next;
      n1 = n1.next;
    } else if (n1.val > n2.val) {
      n3.next = n2;
      n3 = n3.next;
      n2 = n2.next;
    }
  }
  if (n1) {
    n3.next = n1;
  } else if (n2) {
    n3.next = n2;
  }
  return dummyHead.next || dummyHead;
};
