/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: non-negative integer value (ex. 4321)

Output: non-negative integer value as a string primitive data type

Explicit requirements: input value is transformed
Cannot use built in methods

Implicit Requirements:

Questions: How tf do I do this? 

E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
Array of strings of digits with every possible digit
empty string in function to push digits to.

A - algorithm

First, high level:
create lookup table - array of string digits
create function integerToString
1. requires empty string as result array
Loop:
2. create remainder var to isolate last digit on right of number
3. push to empty string the element in lookup table at the remainder value
4. reassign number to number divided by 10 to work on next digit in the input number
End loop:
5. return result
Second, pseudocode:


C - code


Question:In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. 
In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string 
representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), 
Number.prototype.toString, or an expression such as '' + number. Your function should do 
this the old-fashioned way and construct the string by analyzing and manipulating the number.


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

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"

// the problem never said you couldn't have an empty string but for some reason I thought you couldn't. 
// I cut myself off at the knees.