// https://leetcode.com/submissions/detail/530279400/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

	let a = 0, b = 1;

	while (a < nums.length - 1) {
		b = a + 1;
		if (nums[a] + nums[b] === target && a != b) {
			return [a, b];
		};
		while (b < nums.length) {
			if (nums[a] + nums[b] === target && a != b) {
				return [a, b];
			};
			b++;
		};
		a++;
	};

	return [a, b];
};