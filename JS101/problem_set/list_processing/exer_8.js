/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: array of numbers

Output: number

Explicit requirements: add up each subsequence and sum
up all subsequences for total.
Assume at least 1 number in array.

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?
sum variable

A - algorithm

First, high level:

create sum variable = 0;

for loop with idx at 0
  call slice on input array, using idx as second param
    call reduce on this with accumulator + current value

Second, pseudocode:


C - code


Question:

Write a function that takes an array of numbers, and returns the sum of the
sums of each leading subsequence for that array. You may assume that the
array always contains at least one number.

*/

function sumOfSums(array) {
  let sum = 0;

  for (let idx = 1; idx <= array.length; idx++) {
    sum += array.slice(0, idx).reduce((accum, num) => accum + num);
  }

  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35