import { describe, it, expect } from '@jest/globals';
import { ListNode } from '../../utils/ListNode/ListNode';

/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
const reverseStringify = (listNode: ListNode | null): string => {
    if (!listNode) return '';
    if (!listNode.next) return `${listNode.val}`;
    return `${reverseStringify(listNode.next)}${listNode.val}`;
};

const stringify = (listNode: ListNode | null): string => {
    if (!listNode) return '';
    if (!listNode.next) return `${listNode.val}`;
    return `${listNode.val}${stringify(listNode.next)}`;
};

const createLinkedNumberList = (intArray: number[]) => {
    let result = null;

    for (const digit of intArray) {
        const newNode: ListNode = new ListNode(digit, result);
        result = newNode;
    }

    return result;
};

const numToNumArray = (num: number) =>
    num
        .toString()
        .split('')
        .map((s) => parseInt(s));

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    if (!l1 && !l2) return null;
    if (!l1) return addTwoNumbers(new ListNode(0), l2);
    if (!l2) return addTwoNumbers(l1, new ListNode(0));

    const sum = [l1, l2]
        .map((l) => parseInt(reverseStringify(l)))
        .reduce((accu, curr) => accu + curr, 0);

    return createLinkedNumberList(numToNumArray(sum));
}
// @lc code=end

const l1 = createLinkedNumberList([2, 4, 3]);
const l2 = createLinkedNumberList([5, 6, 4]);
const sum = addTwoNumbers(l1, l2);
console.log({ sum, print: stringify(sum) });

describe('createLinkedNumberList', () => {
    it('should create a linked list from an array of digits', () => {
        const input = [2, 4, 3];
        const expectedOutput = new ListNode(
            3,
            new ListNode(4, new ListNode(2))
        );
        const result = createLinkedNumberList(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should create a linked list with a single node for a single digit array', () => {
        const input = [0];
        const expectedOutput = new ListNode(0);
        const result = createLinkedNumberList(input);
        expect(result).toEqual(expectedOutput);
    });

    it('should create a linked list from a larger array of digits', () => {
        const input = [9, 9, 9, 9, 9, 9, 9];
        const expectedOutput = new ListNode(
            9,
            new ListNode(
                9,
                new ListNode(
                    9,
                    new ListNode(
                        9,
                        new ListNode(9, new ListNode(9, new ListNode(9)))
                    )
                )
            )
        );
        const result = createLinkedNumberList(input);
        expect(result).toEqual(expectedOutput);
    });
});
