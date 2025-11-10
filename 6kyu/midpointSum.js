/*
For a given list of integers, return the index of the element where the sums of the integers to the left and right of the current element are equal.

Ex:

ints = [4, 1, 7, 9, 3, 9]
# Since 4 + 1 + 7 = 12 and 3 + 9 = 12, the returned index would be 3

ints = [1, 0, -1]
# Returns None/nil/undefined/etc (depending on the language) as there
# are no indices where the left and right sums are equal
*/

function midpointSum(arr) {
  // Need at least 3 elements to have non-empty left and right
  if (arr.length < 3) {
    return undefined;
  }

  const totalSum = arr.reduce((sum, num) => sum + num, 0);
  let leftSum = arr[0]; // Start with first element

  // Only check indices from 1 to length-2 (inclusive)
  // This ensures both left and right sides are non-empty
  for (let i = 1; i < arr.length - 1; i++) {
    const rightSum = totalSum - leftSum - arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }

  return undefined;
}

// Example usage:
console.log(midpointSum([4, 1, 7, 9, 3, 9])); // Output: 3
console.log(midpointSum([1, 0, -1])); // Output: null
