/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/

function twoSum(nums: number[], target: number) {
	let prevMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		let diff = target - nums[i];
		if (prevMap.has(diff)) {
			return [prevMap.get(diff), i];
		} else {
			prevMap.set(nums[i], i);
		}
	}
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));

/*
time complexity == O(n) because single pass through nums array
space complexity == O(c+n) beacuse i and diff are const and only nums will varry arrcouding to length of nums
*/
