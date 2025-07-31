function reverseLetter(str) {
  //coding and coding..
  return str
    .replace(/[^a-z]/gi, "")
    .split("")
    .reverse()
    .join("");
}
