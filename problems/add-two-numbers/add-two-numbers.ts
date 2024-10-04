//#region IMPORTS
import { ListNode } from '../../utils/ListNode/ListNode';
//#endregion IMPORTS

//#region LEETCODE
/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
const stringify = (listNode: ListNode | null): string => {
    if (!listNode) return '';
    if (!listNode.next) return `${listNode.val}`;
    return `${stringify(listNode.next)}${listNode.val}`;
};

const reverseStringify = (listNode: ListNode | null): string => {
    if (!listNode) return '';
    if (!listNode.next) return `${listNode.val}`;
    return `${listNode.val}${reverseStringify(listNode.next)}`;
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
        .map((l) => parseInt(stringify(l)))
        .reduce((accu, curr) => accu + curr, 0);

    return createLinkedNumberList(numToNumArray(sum));
}
// @lc code=end
//#endregion LEETCODE

// #region LOGS
// console.log({ sum, print: reverseStringify(sum) });
// #endregion

// #region TEST
if (!process.env.JEST_WORKER_ID) process.exit(0);
// import jestGlobals from '@jest/globals';
// const { describe, it, expect } = jestGlobals;
// describe('createLinkedNumberList', () => {
//     it('should create a linked list from an array of digits', () => {
//         const input = [2, 4, 3];
//         const expectedOutput = new ListNode(
//             3,
//             new ListNode(4, new ListNode(2))
//         );
//         const result = createLinkedNumberList(input);
//         expect(result).toEqual(expectedOutput);
//     });

//     it('should create a linked list with a single node for a single digit array', () => {
//         const input = [0];
//         const expectedOutput = new ListNode(0);
//         const result = createLinkedNumberList(input);
//         expect(result).toEqual(expectedOutput);
//     });

//     it('should create a linked list from a larger array of digits', () => {
//         const input = [9, 9, 9, 9, 9, 9, 9];
//         const expectedOutput = new ListNode(
//             9,
//             new ListNode(
//                 9,
//                 new ListNode(
//                     9,
//                     new ListNode(
//                         9,
//                         new ListNode(9, new ListNode(9, new ListNode(9)))
//                     )
//                 )
//             )
//         );
//         const result = createLinkedNumberList(input);
//         expect(result).toEqual(expectedOutput);
//     });

//     it('should create a linked list from an array of digits with some zeros', () => {
//         const input = [1, 0, 0, 1];
//         const expectedOutput = new ListNode(
//             1,
//             new ListNode(0, new ListNode(0, new ListNode(1)))
//         );
//         const result = createLinkedNumberList(input);
//         expect(result).toEqual(expectedOutput);
//     });

//     it('should create a linked list from an array of digits with 29 zeros surrounded by 1s', () => {
//         const input = [
//             1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 1,
//         ];
//         const expectedOutput = new ListNode(
//             1,
//             new ListNode(
//                 0,
//                 new ListNode(
//                     0,
//                     new ListNode(
//                         0,
//                         new ListNode(
//                             0,
//                             new ListNode(
//                                 0,
//                                 new ListNode(
//                                     0,
//                                     new ListNode(
//                                         0,
//                                         new ListNode(
//                                             0,
//                                             new ListNode(
//                                                 0,
//                                                 new ListNode(
//                                                     0,
//                                                     new ListNode(
//                                                         0,
//                                                         new ListNode(
//                                                             0,
//                                                             new ListNode(
//                                                                 0,
//                                                                 new ListNode(
//                                                                     0,
//                                                                     new ListNode(
//                                                                         0,
//                                                                         new ListNode(
//                                                                             0,
//                                                                             new ListNode(
//                                                                                 0,
//                                                                                 new ListNode(
//                                                                                     0,
//                                                                                     new ListNode(
//                                                                                         0,
//                                                                                         new ListNode(
//                                                                                             0,
//                                                                                             new ListNode(
//                                                                                                 0,
//                                                                                                 new ListNode(
//                                                                                                     0,
//                                                                                                     new ListNode(
//                                                                                                         0,
//                                                                                                         new ListNode(
//                                                                                                             0,
//                                                                                                             new ListNode(
//                                                                                                                 0,
//                                                                                                                 new ListNode(
//                                                                                                                     0,
//                                                                                                                     new ListNode(
//                                                                                                                         0,
//                                                                                                                         new ListNode(
//                                                                                                                             0,
//                                                                                                                             new ListNode(
//                                                                                                                                 0,
//                                                                                                                                 new ListNode(
//                                                                                                                                     1
//                                                                                                                                 )
//                                                                                                                             )
//                                                                                                                         )
//                                                                                                                     )
//                                                                                                                 )
//                                                                                                             )
//                                                                                                         )
//                                                                                                     )
//                                                                                                 )
//                                                                                             )
//                                                                                         )
//                                                                                     )
//                                                                                 )
//                                                                             )
//                                                                         )
//                                                                     )
//                                                                 )
//                                                             )
//                                                         )
//                                                     )
//                                                 )
//                                             )
//                                         )
//                                     )
//                                 )
//                             )
//                         )
//                     )
//                 )
//             )
//         );
//         const result = createLinkedNumberList(input);
//         expect(result).toEqual(expectedOutput);
//     });
// });

describe('reverseStringify', () => {
    it('should print the listNode as a string', () => {
        const linkedList = createLinkedNumberList([9, 2, 1]);
        const result = reverseStringify(linkedList);
        expect(result).toEqual('129');
    });
});

describe('stringify', () => {
    it('should print the listNode as a string in reverse', () => {
        const linkedList = createLinkedNumberList([5, 6, 4]);
        const stringified = reverseStringify(linkedList);
        console.log({ stringified });
        const result = stringify(linkedList);
        console.log({ result });
        expect(result).toEqual('564');
    });
});

// describe('addTwoNumbers', () => {
//     it('leetcode problem', () => {
//         const l1 = createLinkedNumberList([
//             1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 1,
//         ]);
//         const l2 = createLinkedNumberList([5, 6, 4]);
//         const result = addTwoNumbers(l1, l2);

//         console.log(reverseStringify(result));
//         expect(result).toEqual([
//             6, 6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//             0, 0, 0, 0, 0, 0, 0, 1,
//         ]);
//     });
// });
// #endregion
