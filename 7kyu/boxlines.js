function f(X, Y, Z) {
  return  X * (Y + 1) * (Z + 1) + 
          Y * (X + 1) * (Z + 1) +
          Z * (X + 1) * (Y + 1);
}
console.log(f(1, 1, 1)); // 12
console.log(f(2, 1, 1));
