/*
Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary).

Example
[   // 3x3 matrix
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
]
*/

const sum = (matrix) => {
  let total = 0;
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    total += matrix[i][i]; // Primary diagonal
    total += matrix[i][n - 1 - i]; // Secondary diagonal
  } 
  if (n % 2 === 1) {
    total -= matrix[Math.floor(n / 2)][Math.floor(n / 2)]; // Subtract the middle element if n is odd
  }
  return total;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(sum(matrix)); // Output: 25
