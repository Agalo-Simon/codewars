function generateShape(int) {
  let string = "";
  for (let i = 0; i < int * int; i++) {
    if (i % int === 0 && i !== 0) {
      string += "\n";
    }
    string += "+";
  }
  return string;
}
