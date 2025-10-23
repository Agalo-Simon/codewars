/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
*/
function validParentheses(str) {
  let count = 0;

  for (let char of str) {
    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;
      if (count < 0) {
        return false;
      }
    }

  }
  return count === 0;
}
console.log(validParentheses("()"));        // true
console.log(validParentheses(")(()))"));    // false
console.log(validParentheses("("));         // false
console.log(validParentheses("(())"));      // true
console.log(validParentheses("()()"));      // true
console.log(validParentheses("())("));      // false