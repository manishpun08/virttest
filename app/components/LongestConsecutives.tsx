import React from "react";

interface LongestConsecutivesProps {
  nums: number[];
}
const LongestConsecutives: React.FC<LongestConsecutivesProps> = ({ nums }) => {
  const numSet = new Set(nums);
  let maxLength = 0;

  for (const num of nums) {
    // Check if this number is the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      // Find the length of the sequence starting with this number
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }
      // Update the maximum length
      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return (
    <div>
      <h1 className="font-bold text-2xl py-2">Task 3:</h1>
      <h1>Longest Consecutive Sequence Length: {maxLength}</h1>
    </div>
  );
};

export default LongestConsecutives;
