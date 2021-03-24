/*

Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.

Algorithm:

split string into array of words

loop over array
  if word has length of 1
    return word
  word at index is assigned fliced last character, the sliced inbetween, and sliced first character

return joined array

*/

function swap(str) {
  let arr = str.split(" ");

  for (let idx = 0; idx < arr.length; idx++) {
    let word = arr[idx];
    if (arr[idx] === 1) continue;

    arr[idx] = word[word.length - 1] +
    word.slice(1, -1) + word[0];
  }

  return arr.join(" ");
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
// swap('a');                              // "a"