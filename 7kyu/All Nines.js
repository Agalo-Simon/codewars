function allNines(x) {
  let num = 9n;
  if (!(x % 2n) || !(x % 5n)) return -1n;
  while (num % x) num = num * 10n + 9n;
  return num / x;
}
