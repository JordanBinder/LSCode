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

Output: number (avg of all elements in array)

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?
For loop will work great

Can this be made easier/more readable by breaking it up into more functions?
I don't think so.

E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
Accumulator variable to divide by num of elements

A - algorithm

First, high level:
create accumulator variable
for loop
  add each element to accumulator

let result be accumulator divided by array's length and use method call floor (maybe toFixed?)

Second, pseudocode:


C - code


Question:

Write a function that takes one argument, an array of integers, 
and returns the average of all the integers in the array, rounded down to the 
integer component of the average. The array will never be empty, and the numbers 
will always be positive integers.


*/

function average (arr) {
  let accum = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    let elem = arr[idx];
    accum += elem;
  }

  let result = Math.floor(accum / arr.length);
  return result;
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

/*
I did this question well. Further exploration using forEach & Reduce

function average(arr) {
  let accum = 0;
  arr.forEach(el => accum += el);
  let result = Math.floor(accum / arr.length);

  return result;
}

function average(arr) {
  let sum = arr.reduce((accum, currentVal) => accum += currentVal);
  return Math.floor(sum/ arr.length);
}