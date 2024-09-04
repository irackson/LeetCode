// https://leetcode.com/problems/middle-of-the-linked-list/
// https://leetcode.com/submissions/detail/530812267/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
};


//* my solution
var middleNode = function(head) {
	if (!head.next) {
		return head;
	}
	if (!head.next.next) {
		return head.next;
	}

	let copy = {...head};
	let count = 0;
	while (head.next) {
		head = head.next;
		count++;
	}

	const mid = Math.ceil(count / 2);
	for (let i = 0; i < count; i ++) {
		if (i === mid) {
			return copy;
		}
		copy = copy.next;
	}
};


//! better solution
// var middleNode = function(head) {
//    let arr = [head]
//    while (arr[arr.length - 1].next != null){
//        arr.push(arr[arr.length-1].next);
//           console.log(arr);
//    }
//     return arr[Math.floor(arr.length /2)]
    
// };

//! also better
// var middleNode = function(head) {
//     let slow = head;
//     let fast = head;
    
//     while(fast.next && fast.next.next){
//     	console.log('slow', slow);
//     	console.log('fast', fast);
//         slow = slow.next;
//         fast = fast.next.next
//     }
    
//     //If there are two middle nodes, return the second middle node.
//     if(fast.next){
//         return slow.next;
//     }
    
//     return slow;
// };


const myHead = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const myHead2 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9)))))))));
const myHead3 = new ListNode(1);
console.log(middleNode(myHead2));
