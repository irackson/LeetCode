#
# @lc app=leetcode id=242 lang=python3
#
# [242] https://leetcode.com/problems/valid-anagram/description/
# https://neetcode.io/problems/is-anagram


# @lc code=start
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return False


# @lc code=end

if __name__ == "__main__":
    s = "racecar"
    t = "carrace"
    solution = Solution()
    result = solution.isAnagram(s, t)
    """ expect = True
    if result != expect:
        raise ValueError(f"Expected  but got {result}") """

    print(f"({s}, {t}): {result}")
