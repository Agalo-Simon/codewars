function calculate(str) {
  //your code here...
  return eval(
    str.replace(/(plus)/gi, "+").replace(/(minus)/gi, "-")
  ).toString();
}
