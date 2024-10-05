#
# @lc app=leetcode id=1 lang=python3
#
# [1] [Two Sum](https://leetcode.com/problems/two-sum/)
# https://neetcode.io/problems/two-integer-sum

# @lc code=start
from typing import List


class Solution:
    def properlyTypedTwoSum(self, nums: List[int], target: int) -> tuple[int, int]:
        for index_a, value_a in enumerate(nums):
            for index_b, value_b in enumerate(nums):
                if index_a == index_b:
                    continue
                if value_a + value_b == target:
                    return (index_a, index_b)

        raise ValueError("no sum equal to target in provided nums")

    def twoSum(self, nums: List[int], target: int) -> List[int]:
        return list(self.properlyTypedTwoSum(nums, target))


# @lc code=end
if __name__ == "__main__":
    solution = Solution()
    result = solution.twoSum([3, 2, 4], 6)
    print(f"{result = }")
