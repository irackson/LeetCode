#
# @lc app=leetcode id=242 lang=python3
#
# [242] https://leetcode.com/problems/valid-anagram/description/
# https://neetcode.io/problems/is-anagram


# @lc code=start
from collections import Counter


class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # region CONSTRAINTS
        len_s = len(s)
        if not (1 <= len_s):
            raise ValueError(
                f"String length of 's' must be at least 1, but got {len_s}"
            )
        if not (s.isalpha()):
            raise ValueError(
                f"The string 's' must consist of only lowercase English letters, but got {s}"
            )

        len_t = len(t)
        if not (len_t <= 5 * 10**4):
            raise ValueError(
                f"String length of 't' must be less than or equal to {50_000}, but got {len_t}"
            )
        if not (t.isalpha()):
            raise ValueError(
                f"The string 's' must consist of only lowercase English letters, but got {s}"
            )
        # endregion

        # region MVP
        """ if len_s != len_t:
            return False

        sorted_s = sorted(s)
        sorted_t = sorted(t)
        return sorted_s == sorted_t """
        # endregion

        return Counter(s) == Counter(t)


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
