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
