// https://leetcode.com/problems/reverse-linked-list/
// https://leetcode.com/submissions/detail/530821063/


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
};

// my solution
var reverseList = function(head) {
	if (!head?.val && !head?.next) {return head};
  	let reversed = new ListNode(head.val);
	while (head.next) {
		reversed = new ListNode(head.next.val, reversed);
		head = head.next;
	}
	return reversed;
};