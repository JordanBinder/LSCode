/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input:

Output:

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


Second, pseudocode:


C - code


Question:
Write a recursive function that computes the nth Fibonacci number,
where nth is an argument passed to the function.

NOTE: This exercise verges on the Advanced level of exercises,
so do not be discouraged if you are not able to solve it on your own;
recursion is tricky,
and even experienced developers can have difficulty dealing with it.

Notes:

*/

function fibonacci(nth) {
  let first = 1;
  let second = 1;
  let third = first + second;

  if (nth === 1 || nth === 2) {
    return 1;
  }
  return (first + second) * fibonacci(nth - 1);
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
console.log(fibonacci(5));       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

/* Postmortem:
The above was honestly a guess. LS Solution:

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }
  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

Genuinely don't know how I could have come up with this. Will
be reading the provided material and watching tutorials tonight.
*/