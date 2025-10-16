function remove(s) {
  return s.replace(/!/g, "") + "!".repeat(s.split("!").length - 1);
}

console.log(remove("!Hi!"));           // "Hi!!"
console.log(remove("!!Hi! !Hi!"));     // "Hi Hi!!!!"
console.log(remove("Hello World!"));   // "Hello World!"
console.log(remove("abc"));            // "abc"
console.log(remove("!!!"));            // "!!!"