/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input:

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
Write a function that takes a string of digits, and returns the appropriate number as an integer. 
The string may have a leading + or - sign; if the first character is a +, your function should return a 
positive number; if it is a -, your function should return a negative number. If no sign is given, 
you should return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number(). 
You may, however, use the stringToInteger() function from the previous lesson.


*/


function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}