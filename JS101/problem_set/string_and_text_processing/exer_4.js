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

Output: string with first letter of every word uppercase and everything else lowercase.

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

split string into array of words

for loop:
  make entire word lowercase
  then make word[0] uppercase

join array so it's back to a string

return string
Second, pseudocode:


C - code


Question:
Write a function that takes a string as an argument,
and returns that string with the first character of every word
capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.

*/

function wordCap(string) {
  let arrayOfStrings = string.split(" ");

  // for (let idx = 0; idx <= string.length; idx++) {
  //   string.toLowerCase();
  //   // arrayOfStrings[0].toUpperCase();
  // }

  let result = arrayOfStrings.map(word => {
    return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
  });

  return result.join(" ");
}

console.log(wordCap('44 score and seven'));       // "44 Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'

/*
I did this well. I need to remember to use slice as I
tried to do it without the method
and it was necessary that I have it.
*/