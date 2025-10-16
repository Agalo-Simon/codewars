function perfectSquare(n) {
  if (n < 0) return false;
  const sqrt = Math.sqrt(n);
  return sqrt === Math.floor(sqrt);
}


console.log(perfectSquare(4));   // true
console.log(perfectSquare(9));   // true
console.log(perfectSquare(16)); // true     
console.log(perfectSquare(5));   // false
console.log(perfectSquare(0));
console.log(perfectSquare(-4));

