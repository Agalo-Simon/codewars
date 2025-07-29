/*

// Fuction to remve exclamation marks
function removeExclamationMarks(str){
  // return str; // this return the string with exclamation marks.
  // return str.replace(/!/g,''); // The regular expression /!/g searches for all occurrences of the exclamation mark (!) within the string, and the g flag ensures that all matches are replaced, not just the first one. The replacement value is an empty string ('').

 return str.replaceAll('!','');
//  return str.split('!').join('');
}
let text = "Hello! Agalo!!";
let newText = removeExclamationMarks(text);
console.log(newText); // Output: Hello World

*/

// Using the loops to remove exclamation marks.
function removeExclamationMarks(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "!") {
      newStr += str[i];
    }
  }
  return newStr;
}
// Example usage:
let myString = "Hello! Agalo!!";
console.log(myString); // Output: Hello! Agalo!!
let stringWithoutExclamation = removeExclamationMarks(myString);
console.log(stringWithoutExclamation); // Output: Hello! Agalo!!


// Function Expression
// A function expression defines a function as a value within an expression. It can be named or anonymous and is not hoisted, meaning it must be defined before it can be used
// while
// A callback function is a function passed as an argument to another function.,