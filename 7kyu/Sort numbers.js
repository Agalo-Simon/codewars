function solution(nums) {
  if (!nums || nums === 0) {
    return [];
  } else {
    return nums.sort((a, b) => a - b);
  }
}
