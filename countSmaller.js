const countSmaller = () => {
  const counts = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        counts[i]++;
      }
    }
  }

  return counts;
};

const nums = [5, 2, 6, 1];
console.log(countSmaller(nums)); // Output: [2, 1, 1, 0]
