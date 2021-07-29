// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/
// https://leetcode.com/submissions/detail/529952713/?from=explore&item_id=727

export const removeDuplicates = (nums: number[]): number => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};
