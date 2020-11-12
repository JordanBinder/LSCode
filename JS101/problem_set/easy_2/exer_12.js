/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: String with potentially + or - at index 0

Output:

Explicit requirements:

Implicit Requirements:

Questions: 

E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?


A - algorithm

First, high level:

Second, pseudocode:


C - code


Question:
In the previous exercise, you developed a function that converts non-negative numbers to strings. 
In this exercise, you're going to extend that function by adding the ability to represent negative numbers as well.

Write a function that takes an integer, and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, 
such as String() and Number.prototype.toString(). You may, however, use 
integerToString() from the previous exercise.

You might also want to check the Math.sign() function.

*/

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}