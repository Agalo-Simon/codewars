function isDivisible(n, x, y) {
  let isDivisible = false;
  if (n % x === 0 && n % y == 0) {
    return (isDivisible = true);
  } else {
    return isDivisible;
  }
}
