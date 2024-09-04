/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }

    reverseStringify(...args: [ListNode] | []): string {
        if (args.length === 0)
            return this.next
                ? `${this.reverseStringify(this.next)}${this.val}`
                : `${this.val}`;

        const [nextList] = args;
        return nextList.next ? nextList.reverseStringify() : `${nextList.val}`;
    }
}

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    if (!l1 && !l2) return null;
    if (!l1) return addTwoNumbers(new ListNode(0), l2);
    if (!l2) return addTwoNumbers(l1, new ListNode(0));

    const sum = [l1, l2]
        .map((l) => parseInt(l.reverseStringify()))
        .reduce((accu, curr) => accu + curr, 0);

    const intArray = sum
        .toString()
        .split('')
        .map((s) => parseInt(s))
        .reverse();

    let result = null;

    for (const digit of intArray) {
        const newNode: ListNode = new ListNode(digit, result);
        result = newNode;
    }

    return result;
}
// @lc code=end

const l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const l2 = new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8))));
const sum = addTwoNumbers(l1, l2);
//4321+8765=13086
//answer should be: 68031 because that is the reverse of the sum
console.log({ l1: l1.reverseStringify(), l2: l2.reverseStringify() });
console.log(sum?.reverseStringify());
