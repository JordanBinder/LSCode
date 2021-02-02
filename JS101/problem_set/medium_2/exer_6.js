/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: count integer number

Output: integer number

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:

sumSquareDifference:
  let var be -- subtract sumIntSquared sumSquareIntegers and call absolute method
  to get a positive integer.

  return var

sumIntSquared:
var sum = 0;

for loop - idx 1, idx <= count; increment by 1
  sum += idx;

var squaredSum = sum**2

return squaredSum

sumSquareIntegers:
var sum = 0;

for loop - idx 1, idx <= count; increment by 1
  sum += idx**2;

return sum;

Second, pseudocode:


C - code


Question:
Write a function that computes the difference between the
square of the sum of the first count positive integers
and the sum of the squares of the first count positive integers.
Notes:

*/

function sumSquareDifference(count) {
  let result = Math.abs(sumIntSquared(count) - sumSquareIntegers(count));

  return result;
}

function sumIntSquared(count) {
  let sum = 0;

  for (let idx = 1; idx <= count; idx++) {
    sum += idx;
  }
  let squaredSum = sum ** 2;

  return squaredSum;
}

function sumSquareIntegers(count) {
  let sum = 0;

  for (let idx = 1; idx <= count; idx++) {
    sum += idx ** 2;
  }
  return sum;
}

/* Postmortem:
Done correctly without seeing LS solution.

I see how LS is more elegant and with fewer lines of code.

I forgot about Math.pow, which might have led me to this faster version.

Overall good job. Glad I saw the two diff conditions and
felt comfortable in breaking them up.
*/

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150