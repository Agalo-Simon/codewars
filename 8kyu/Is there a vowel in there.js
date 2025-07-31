function isVow(a) {
  return a.map((code) => {
    let char = String.fromCharCode(code);
    if (["a", "e", "i", "o", "u"].includes(char)) {
      return char;
    }
    return code;
  });
}
