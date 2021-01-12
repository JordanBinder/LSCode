/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: Number (positive int)

Output: number representing sum of digits in input

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?
Split to change method

A - algorithm

First, high level:

Use split on input to get array of strings
Use reduce method to both count sum with accumulator param and also
  iterate through the array with currentVal param

return accumulator

Second, pseudocode:


C - code

Write a function that takes one argument, a positive integer, and returns
the sum of its digits. Do this without using for, while, or do...while loops
- instead, use a series of method calls to perform the sum.


Question:


*/

function sum(number) {
  let result = String(number)
    .split("")
    .reduce((accumulator, currentDigit) => accumulator + Number(currentDigit), 0);

  return result;
}


sum(23);           // 5
console.log(sum(496));          // 19
sum(123456789);    // 45

// 0 in reduce sets the accumulator to 0. 0 is the initialValue of accumulator.
// you can think of reduce in this question as saying accumulator += Number(currentDigit). 
// For this question it's essentially the same.