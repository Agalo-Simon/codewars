function fakeBin(x) {
  let res = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      res += "0";
    } else {
      res += "1"
    }
  }
  return res;
}
