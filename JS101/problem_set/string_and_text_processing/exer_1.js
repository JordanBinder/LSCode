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

Output: boolean value

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?

array with all uppercase values

A - algorithm

First, high level:

for loop
  if string at idx does includes

Second, pseudocode:


C - code


Question:

Write a function that takes a string argument, and returns true if
all of the alphabetic characters inside the string are uppercase;
false otherwise. Ignore characters that are not alphabetic.


*/

// const UPPERCASE_CHARACTERS = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
// const LOWERCASE_CHARACTERS = ['abcdefghijkmnopqrstuvwxyz'];

function isUppercase(string) {
  let result = true;

  for (let position = 0; position <= string.length; position++) {
    let currentLetter = string[position];
    if (currentLetter.toUpperCase() === string[position]) {
      continue;
    } else {
      result = false;
    }
  }
  return result;
}


console.log(isUppercase('t'));               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

/* LS Solution:
function isUppercase(string) {
  return string.toUpperCase() === string;
}

The easiest way to solve this problem is to realize that the condition
"all of the alphabetic characters...are uppercase" is true only
if the string is not altered by converting it to all uppercase.
Thus, all we need to is compare string with string.toUpperCase().

My solution did not work, though I thought I was on the right track.
I don't exactly know why mine doesn't work.

I think the problem with mine is line 63.
You seemingly can't evaluate one part of
a string and make it uppercase.
*/