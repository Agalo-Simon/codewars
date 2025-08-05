function findShort(s) {
  /* Simple, given a string of words, return the length of the shortest word(s)./
   String will never be empty and you do not need to account for different data types.
*/
  const arr = s.split(" ");

  let shortest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }
  return shortest.length;
}
