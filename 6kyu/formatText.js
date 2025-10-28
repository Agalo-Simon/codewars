/*
Description:
Write a function format that takes two arguments, text and width, and formats the text to fit the width.

Your function should divide the given text into lines using newline characters. It should fit as many words into each line as possible without exceeding the given width or splitting any words between two lines. There should not be a space at the beginning or end of any line. For example, here is some text formatted with a width of 50:

Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Aliquam nec consectetur risus. Cras vel urna
a tellus dapibus consequat. Duis bibendum
tincidunt viverra. Phasellus dictum efficitur sem
quis porttitor. Mauris luctus auctor diam id
ultrices. Praesent laoreet in enim ut placerat.
Praesent a facilisis turpis.
And the same text formatted with a width of 30:

Lorem ipsum dolor sit amet,
consectetur adipiscing elit.
Aliquam nec consectetur risus.
Cras vel urna a tellus dapibus
consequat. Duis bibendum
tincidunt viverra. Phasellus
dictum efficitur sem quis
porttitor. Mauris luctus
auctor diam id ultrices.
Praesent laoreet in enim ut
placerat. Praesent a facilisis
turpis.
For the purpose of this exercise, words can contain any non-whitespace character and all words are separated by a single space. Words will never be longer than the provided width.

Note for rubists: Function must be named format_ for ruby already has a built in format function.
*/
function format(text, width) {
  const words = text.split(' ');
  let lines = [];
  let currentLine = '';
  for (const word of words) {
    if ((currentLine + word).length <= width) {
      currentLine += (currentLine ? ' ' : '') + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    } 
  }
  if (currentLine) {
    lines.push(currentLine);
  } 
  return lines.join('\n');
}
console.log(format("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.", 50));
console.log(format("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.", 30));