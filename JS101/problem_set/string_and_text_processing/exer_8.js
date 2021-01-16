/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: string

Output: array of strings

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:

create result array
split input string by space so we get array of words
map function with param word
  return word, a space, and length of word

return new array made my map
Second, pseudocode:


C - code

Question:

Write a function that takes a string as an argument, and
returns an array that contains every word from the string,
with each word followed by a space and the word's length.
If the argument is an empty string or if no argument is passed,
the function should return an empty array.

You may assume that every pair of words in the string will be
separated by a single space.

*/

function wordLengths(string) {
  if (string.length === 0) {
    return [];
  }
  let array = string.split(" ");

  let resultArray = array.map(word => {
    return word + " " + String(word.length);
  });

  return resultArray;
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []

/*
Only big difference between me and LS was I
didn't include arguments.length === 0 || from line 61
My code still runs and gets me the correct outcome, but
I don't understand why it's throwing an error
when arguments.length === 0 || isn't present.

The error:
TypeError: Cannot read property 'length' of undefined
    at wordLengths (/Users/jordanchandlerbinder/Documents/LS_Code/LS/JS101/problem_set/string_and_text_processing/exer_8.js:61:14)
    at Object.<anonymous> (/Users/jordanchandlerbinder/Documents/LS_Code/LS/JS101/problem_set/string_and_text_processing/exer_8.js:86:13)
    at Module._compile (internal/modules/cjs/loader.js:1135:14)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1158:10)
    at Module.load (internal/modules/cjs/loader.js:986:32)
    at Function.Module._load (internal/modules/cjs/loader.js:879:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47
*/