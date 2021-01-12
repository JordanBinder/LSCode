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

Output: string with one or two characters

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?
result string

A - algorithm

First, high level:
declare result string;

if input string is odd aka % 2 === 1
  result string is inputString[string.length / 2]
if input string is even aka % 2 === 0
  result string is inputString[string.length / 2],
                  inputString[(string.length / 2) + 1]

Second, pseudocode:


C - code


Question:
Write a function that takes a non-empty string argument, and
returns the middle character(s) of the string.
If the string has an odd length, you should return exactly one character.
If the string has an even length, you should return exactly two characters.


*/

function centerOf(inputStr) {
  let resultStr = "";

  if (inputStr.length % 2 === 1) {
    resultStr = inputStr[Math.floor(inputStr.length / 2)];
  } else {
    resultStr = inputStr[(inputStr.length / 2) - 1] +
                inputStr[(inputStr.length / 2)];

  }

  return resultStr;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

// STRINGS ARE NOT ZERO INDEXED. THAT IS WHY YOU NEED - 1.