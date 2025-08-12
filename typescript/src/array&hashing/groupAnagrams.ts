/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:
There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

function groupAnagrams(strs: string[]): string[][] {
    // Hash map to group anagrams by their character frequency pattern
    // Key: frequency pattern as string, Value: array of anagrams
    const res: { [key: string]: string[] } = {};
    
    // Process each string in the input array
    for (let s of strs) {
        // Create frequency array for 26 lowercase letters (a-z)
        // Index 0 = 'a', Index 1 = 'b', ..., Index 25 = 'z'
        const count = new Array(26).fill(0);
        
        // Count frequency of each character in current string
        for (let c of s) {
            // Convert character to array index: 'a'->0, 'b'->1, etc.
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index] += 1;
        }
        
        // Convert frequency array to unique string key
        // Example: [1,0,1,0,1,...] becomes "1,0,1,0,1,..."
        const key = count.join(',');
        
        // Initialize array for this frequency pattern if not exists
        if (!res[key]) {
            res[key] = [];
        }
        
        // Add current string to its anagram group
        res[key].push(s);
    }
    
    // Return all anagram groups as 2D array
    return Object.values(res);
}

// Debug version to visualize the dry run
function groupAnagramsDebug(strs: string[]): string[][] {
    console.log(`\n=== DRY RUN FOR: [${strs.map(s => `"${s}"`).join(", ")}] ===`);
    const res: { [key: string]: string[] } = {};
    
    for (let i = 0; i < strs.length; i++) {
        const s = strs[i];
        console.log(`\nStep ${i + 1}: Processing "${s}"`);
        
        const count = new Array(26).fill(0);
        console.log(`  Initial count array: [${count.slice(0, 5).join(',')}...] (26 zeros)`);
        
        for (let c of s) {
            const index = c.charCodeAt(0) - 'a'.charCodeAt(0);
            count[index] += 1;
            console.log(`    '${c}' -> index ${index} (${c.charCodeAt(0)} - ${97} = ${index})`);
            console.log(`    count[${index}] = ${count[index]}`);
        }
        
        // Show only non-zero counts for clarity
        const nonZeroCounts = count.map((val, idx) => val > 0 ? `${String.fromCharCode(97 + idx)}:${val}` : '').filter(x => x);
        console.log(`  Character frequencies: {${nonZeroCounts.join(', ')}}`);
        
        const key = count.join(',');
        console.log(`  Generated key: "${key.substring(0, 20)}..." (length: ${key.length})`);
        
        if (!res[key]) {
            res[key] = [];
            console.log(`  ✨ New group created for this pattern`);
        } else {
            console.log(`  📝 Adding to existing group: [${res[key].map(x => `"${x}"`).join(', ')}]`);
        }
        
        res[key].push(s);
        console.log(`  Current group: [${res[key].map(x => `"${x}"`).join(', ')}]`);
    }
    
    console.log(`\n=== FINAL RESULT ===`);
    const result = Object.values(res);
    result.forEach((group, idx) => {
        console.log(`Group ${idx + 1}: [${group.map(s => `"${s}"`).join(', ')}]`);
    });
    
    return result;
}

// Run the debug version
groupAnagramsDebug(["eat", "tea", "bat"]);
