function longestConsecutiveChain(nums) {
  if (nums.length === 0) return 0;

  const numSet = new Set(nums);
  let longestChain = 0;

  for (const num of numSet) {
    // Check if it's the start of a chain
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentChainLength = 1;

      // Count the length of the chain
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentChainLength += 1;
      }

      longestChain = Math.max(longestChain, currentChainLength);
    }
  }

  return longestChain;
}

// Example usage:
const nums = [100, 8, 20, 5, 200, 1, 2, 3];
console.log(longestConsecutiveChain(nums)); // Output: 4 (The longest chain is [1, 2, 3, 4])
