// Write a function that takes a string argument and returns a new string that contains 
// the value of the original string with all ***consecutive duplicate characters*** collapsed
// into a single character.


function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }
    index += 1;
  }
  return crunchText;
}



crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""


/* 
this was my original idea. The reason it doesn't work is because you shouldn't be iterating twice over the same string. 
Using a global variable for index solves the problem of needing to compare something in the string and then the very next thing in the string
Without iterating twice.

function crunch (text) {
  // iterate over string with i
    // iterate over string with j
      // if character at position i in string is the same (maybe use character codes?) as next character j (iteration on iteration)
        // push character at i
  // return string
}

*/