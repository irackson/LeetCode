from typing import List

#
# @lc app=leetcode id=217 lang=python3
#
# [217] Contains Duplicate
#

# @lc code=start

# Inspiration: https://neetcode.io/problems/duplicate-integer
# My solution: https://leetcode.com/problems/contains-duplicate/submissions/1411239839
"""
Plan: return length of set < length of array
"""


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        return len(set(nums)) != len(nums)


# @lc code=end

if __name__ == "__main__":
    nums = [1, 2, 3, 1]
    solution = Solution()
    result = solution.containsDuplicate(nums)
    """ expect = True
    if result != expect:
        raise ValueError(f"Expected  but got {result}") """

    print(f"{nums} contains duplicates: {result}")
