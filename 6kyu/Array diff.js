function arrayDiff(a, b) {
  const result = [];
  for (const element of a) {
    if (!b.includes(element)) {
      result.push(element);
    }
  }
  return result;
}
