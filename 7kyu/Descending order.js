function descendingOrder(n) {
  if (n < 0) {
    return "Input must be non-negative integer.";
  }
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );

  //   const digits = String(n).split('');
  //     digits.sort((a, b) => b - a );
  //   const sortedNumberString = digits.join('');
  //   return parseInt(sortedNumberString);
}
