/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: array of numbers 0-19

Output: array of numbers in alphabetical order

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?

We want an array of strings with each word being the alphabetic name
of the index in the array.


A - algorithm

First, high level:


function To get alphabetically numbered array:
compare one num to another with two params firstNum and secondNum
  if array of strings at firstNum > array of strings at secondNum
    return 1
    else if less than <
      return -1
      else
        return 0 aka same number

function to sort the array:
  return above function sorted using sort method

Second, pseudocode:


C - code


Question:

Write a function that takes an array of integers between 0 and 19, and
returns an array of those integers sorted based on the English
word for each number:

*/

const NUMS_IN_ENGLISH =
  ['zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];


function sortWords (firstNum, secondNum) {
  if (NUMS_IN_ENGLISH[firstNum] > NUMS_IN_ENGLISH[secondNum]) {
    return 1;
  } else if (NUMS_IN_ENGLISH[firstNum] < NUMS_IN_ENGLISH[secondNum]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort (array) {
  return array.sort(sortWords);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]