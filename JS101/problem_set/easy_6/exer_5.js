/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: number (pos or neg)

Output: negative num

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:
turn number to string

if string contains -
  return string as number
  else
    add - to front of string and return as number.
Second, pseudocode:


C - code


Question:

Write a function that takes a number as an argument.
If the argument is a positive number, return the negative of that number.
If the argument is a negative number, return it as-is.


*/

function negative(number) {
  let stringedNum = String(number);
  if (stringedNum.includes("-")) {
    parseInt(stringedNum, 10);
  } else {
    stringedNum = "-" + stringedNum;
    parseInt(stringedNum, 10);
  }
  return stringedNum;
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

// Did not need to convert to string. Still works tho. LS Solution below.

/*
function negative(number) {
  return Math.abs(number) * -1;
}
*/
