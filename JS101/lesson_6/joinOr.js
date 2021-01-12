/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: array (mandatory), inbetween value (optional), and or or (optional)

Output: string

Explicit requirements:

Implicit Requirements:
  If no second param, defaults to ', '.
  If no 3rd param, defaults to 'or'

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:

if length of array is 0, return empty array
if length of array is 1, return string with that value
if length of array is 2, return value 1 + andOr string + value 2 all as a string
if length of array is 3 or more,
return values with delimiter and andOr all as a string

Second, pseudocode:

if array.length is 0
  return empty string

if array.length is 1
  return String(array[0])

if array.length is 2
  return `${array[0]} ${andOr} ${array[1]}`;

if array.length is 3 or more
  slice everything but last value
  then join with the delimiter to put in comma
  then object literal the delimiter, the word, and the last value


C - code


Question:

Write a function named joinOr that produces the following results:

*/

function joinOr(array, delimiter = ', ', word = 'or') {
  if (array.length === 0) {
    return '';
  } else if (array.length === 1) {
    return `${array[0]}`;
  } else if (array.length === 2) {
    return `${array[0]} ${word} ${array[1]}`;
  } else if (array.length >= 3) {
    return array.slice(0, array.length - 1).join(delimiter) +
      `${delimiter}${word} ${array[array.length - 1]}`;
  } else {
    return '';
  }
}

// tests
console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"

/* NOTES

it's very cool that you can set defaults in the parameter. I didn't know that!
This was straightforward and I understood it. I wish I
had thought to use a switch statement
but it's ok but my solution still works. Remember that in situations where
you have different cases doing different things,
switch statements work really well.

*/