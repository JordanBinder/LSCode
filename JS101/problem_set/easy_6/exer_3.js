/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: positive integer

Output: positive integer with its digits reversed

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:

turn number into string
split string into array of strings
reverse method on array
join array into new string
eliminate leading zeros (built in method? maybe unnecessary with next step?)
turn string back into number
return number

Second, pseudocode:


C - code


Question:

Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.


*/

function reverseNumber(number) {
  let arr = number.toString().split("").reverse().join("");
  let result =  parseInt(arr, 10);

  return result;
}


reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

// I am happy with the way I did this problem.