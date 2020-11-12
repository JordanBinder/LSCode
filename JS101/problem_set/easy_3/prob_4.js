/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: positive integer greater or equal to 2

Output: the index of the first Fibonacci number has the number of digits specified by the argument.
AKA, when parameter is 2, we're talking about returning the index of the first time there is a 2 digit number in the sequence

Explicit requirements: Arg is always an integer greater than or equal to 2.

Implicit Requirements:

Questions: Will we want a lookup table of Fibonacci numbers?

E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
lookup table of fibonacci numbers? Was not used in solution
representation of fibonacci 

A - algorithm

First, high level:

Second, pseudocode:


C - code


Question:

Write a function that calculates and returns the index of the first Fibonacci number that has the number 
of digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

*/

function findFibonacciIndexByLength(length) {
  if (Number(length) > 16) {
    return ${`JavaScript does not allow for numbers with digits greater than 16`}
  };
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}

// a Fibonacci lookup table would work in theory but be really difficult because it would be such a large lookup value
// the Do...while loop allows us to run the loop and find what we need easily
// the value of fibonacci is first plus second
// index increments by 1
// The value of the first becomes second
// the value of second becomes fibonacci

