function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  } else {
    const evenIndexes = [];
    for (let i = 1; i < string.length; i += 2) {
      evenIndexes.push(string[i]);
    }
    return evenIndexes;
  }
}
