function capitalize(s, arr) {
  const strA = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (strA[arr[i]]) {
      strA[arr[i]] = strA[arr[i]].toUpperCase();
    }
  }
  return strA.join("");
}
