function getMiddle(s) {
  //Code goes here!
  const middle = s.length / 2;
  if (s.length % 2) {
    return s.charAt(Math.floor(middle));
  }
  return s.slice(middle - 1, middle + 1);
}
