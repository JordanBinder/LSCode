/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: array of nums

Output: array of nums with altered elements

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
We will want an empty array
We will want an accumulator variable
For loop to iterate over elements in the array

A - algorithm

First, high level:
declare empty array
declare accumulator var
declare for loop
  accumulator value equals accumulator + array at given index value
  push to new array the accumulator var.
  return new array

Second, pseudocode:


C - code


Question:

Write a function that takes an array of numbers, and returns an array with the same number of 
elements, with each element's value being the running total from the original array.
*/

let newArray = [];
let accum = 0;

function runningTotal(arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    accum += arr[idx];
    newArray.push(accum);
  }
  return newArray;
}


runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

// difference between mine and LS is that I made newArray and accum global inside 
// of within the scope of the function. I will assume within the scope of the fxn is best next time.