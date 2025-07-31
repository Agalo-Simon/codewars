function findMultiples(integer, limit) {
  //your code hee
  let result = [];
  for (let i = integer; i <= limit; i += integer) {
    result.push(i);
  }
  return result;
}
