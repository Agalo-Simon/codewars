function stringToArray(string) {
  return string.split(" ");
}

//Method 2
// function stringToArray(string) {
//   const res = [];
//   let word = "";

//   for (let i = 0; i < string.length; i++) {
//     const letter = string[i];

//     if (letter == " ") {
//       res.push(word);
//       word = "";
//     } else {
//       word += letter;
//     }
//   }

//   res.push(word);
//   return res;
// }