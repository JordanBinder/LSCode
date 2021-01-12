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

Output: string with words in reverse

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?

Going from string to array back to string

A - algorithm

First, high level:

call split method to go from string to array
call reverse on new array
call join method to go from array to string

Second, pseudocode:


C - code


Question:

Write a function that takes a string argument,
and returns a new string containing the words from the string argument
in reverse order.


*/

function reverseSentence(string) {
  let result = string.split(" ").reverse().join(" ");
  return result;
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"