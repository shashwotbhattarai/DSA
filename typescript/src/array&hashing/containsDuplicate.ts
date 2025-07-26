function containsDuplicate(nums: number[]): boolean {
	return nums.length !== new Set(nums).size;
}

console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9]));
