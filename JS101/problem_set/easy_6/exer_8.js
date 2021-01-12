/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: 2 integers, one is a count, the other is the starting value of our output

Output: array

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop might be good for this question (if any)?
For loop

Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:

declare empty result arr

declare function with (count, startingNum)
  for loop with condition idx <= count
    push startingNum times index to result arr

  if (count === 0)
    return empty arr


Second, pseudocode:


C - code


Question:
Create a function that takes two integers as arguments.
The first argument is a count,
and the second is the starting number of a sequence
that your function will create.
The function should return an array containing the
same number of elements as the count argument.
The value of each element should be a multiple of the starting number.

You may assume that the count argument will always be an integer
greater than or equal to 0.
The starting number can be any integer.
If the count is 0, the function should return an empty array.


*/

function sequence (count, startingNum) {
  let resultArr = [];

  if (count === 0) {
    return resultArr;
  }

  for (let idx = 1; idx <= count; idx++) {
    resultArr.push(idx * startingNum);
  }

  return resultArr;
}


console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

// I initially wanted to figure out how I could add instead of multiply.
// Not necessary.