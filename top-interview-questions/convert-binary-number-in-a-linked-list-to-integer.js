// https://leetcode.com/submissions/detail/530404450/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
};


// @param {ListNode} head
// @return {number}
var getDecimalValue = function(head) {
    const helper = (subHead) => {
        if (!subHead.next) {return subHead.val.toString()};        
        return subHead.val.toString() + helper(subHead.next);
    };
    return parseInt(helper(head), 2);
};


const myHead = new ListNode(1, new ListNode(0, new ListNode(1)));
console.log(getDecimalValue(myHead));
