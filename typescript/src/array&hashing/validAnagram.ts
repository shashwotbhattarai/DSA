/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.


Example 1:

Input: s = "anagram", t = "nagaram"

Output: true


Example 2:

Input: s = "rat", t = "car"

Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

function validAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) {
		return false;
	}

	const cS = {};
	const cT = {};

	for (let i = 0; i < s.length; i++) {
		cS[s[i]] = (cS[s[i]] || 0) + 1;
		cT[t[i]] = (cT[t[i]] || 0) + 1;
	}

	for (const key in cS) {
		if (cS[key] !== cT[key]) {
			return false;
		}
	}

	return true;
}

console.log(validAnagram("abc", "abcd"));
console.log(validAnagram("bcdggh", "bcdggi"));
console.log(validAnagram("rat", "tar"));

/*

time complexity == O(n+m)
n being length of string, since both strings must be of equal size we can consider there length n
m is the lenght of frequency hash map of either strings. since both the strings are of equal size, 
their hashmap size will also be equal and can be cosidered m.

space complexity == O(c+2n)

*/
