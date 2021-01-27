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

For this exercise, your objective is to refactor the recursive fibonacci
function to use memoization.

Notes:

*/

// function fibonacci(nth) {
//   let first = 1;
//   let second = 1;
//   let third = first + second;

//   if (nth === 1 || nth === 2) {
//     return 1;
//   }
//   return (first + second) * fibonacci(nth - 1);
// }

// function fibonacci(nth) {
//   let fibObj = {
//     key: val,
//     pizza: walnuts,

//   }
//   let fibOne = fibonacci(nth - 1);
//   let fibTwo = fibonacci(nth - 2);
//   if (nth <= 2) {
//     return 1;
//   }
//   return fibOne + fibTwo;
// }

// LS Solution:
let memo = {};
function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
    return memo[nth];
  }
}

fibonacci(1);       // 1
fibonacci(2);       // 1
fibonacci(3);       // 2
fibonacci(4);       // 3
console.log(fibonacci(5));       // 5
fibonacci(12);      // 144
fibonacci(20);      // 6765

// memoization ex: 
/* Postmortem:

*/