/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: number

Output: number

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?
no.

E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?
first
second
third

A - algorithm

First, high level:
declare first = 1
declare second = 1
declare third = 1 + 1
declare resultArray = [];

For loop
  third = first + second;
  second = first
  third = second

C - code


Question:
Rewrite your recursive fibonacci function so that
it computes its results without using recursion.
Notes:

*/

function fibonacci(count) {
  let first = 0;
  let second = 1;
  let third;
  if (count === 1) {
    return 1;
  }
  for (let idx = 1; idx <= count; idx++) {
    third = first + second;
    first = second;
    second = third;
  }
  return third;
}


console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(19));
console.log(fibonacci(49));

// fibonacci(20);       // 6765 **** my solution reaches this at fibonacci(19) ****
// fibonacci(50);       // 12586269025 **** my solution reaches this at fibonacci(49) ****
// fibonacci(75);       // 2111485077978050
/* Postmortem:

why nth - 2?

Does my solution count as procedural?

Why do I not get 1 for the first two values but afterwards
get the correct sequence of nums? How can I fix that?
*/