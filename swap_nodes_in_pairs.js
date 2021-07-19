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
var swapPairs = function (head) {
  if (!head) return head;
  if (!head.next) return head;

  let curr = head;
  let newHead = curr.next;

  while (curr && curr.next) {
    let one = curr;
    let two = one.next;
    let nextOne = two.next;

    one.next = two?.next?.next || two?.next;
    two.next = one;
    curr = nextOne;
  }
  return newHead;
};
