/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: integer

Output: array of integers

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
declare arr = []
declare incrementByOne = 0

for loop with idx 0
  arr[idx] += incrementByOne + 1;
  incrementByOne += 1;


return arr
Second, pseudocode:


C - code


Question:

Write a function that takes an integer argument,
and returns an array containing all integers between 1 and the
argument (inclusive),
in ascending order.

You may assume that the argument will always be a positive integer.

*/

function sequence(num) {
  let arr = [];
  let incrementByOne = 0;

  for (let idx = 0; idx < num; idx++) {
    arr[idx] = incrementByOne + 1;
    incrementByOne += 1;
  }

  return arr;
}


console.log(sequence(5));    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]