function solve(arr) {
  const set = new Set(arr);
  let start;

  // Find the starting number (no predecessor in the set)
  for (const x of arr) {
    const hasPredecessor =
      set.has(x * 3) || // could have come from x*3 via /3
      (x % 2 === 0 && set.has(x / 2)); // could have come from x/2 via *2

    if (!hasPredecessor) {
      start = x;
      break;
    }
  }

  // Reconstruct the sequence
  const result = [];
  let current = start;
  while (result.length < arr.length) {
    result.push(current);
    // Determine next: try /3 first, then *2 (order doesn't matter — only one will be in set)
    if (current % 3 === 0 && set.has(current / 3)) {
      current = current / 3;
    } else if (set.has(current * 2)) {
      current = current * 2;
    }
    // Since answer always exists, one of the above will always match
  }

  return result;
}
