/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: number

Output: array of number(s) (any length)

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
Remainder % will be useful

A - algorithm

First, high level:

function
  declare resultArr
  while input number is greater than 0
    declare resultNum;
    push to result arr - resultNum % 10


  Sort method 

  re
  
Second, pseudocode:


C - code


Question:
Write a function that takes one argument, a positive integer, and returns a list of the digits 
in the number.


*/


function digitList(num) {
  let resultArr = [];

  while (num > 0) {
    let numToPush = num % 10;
    resultArr.push(numToPush);
    num = Math.floor(num / 10);
  }

  resultArr.reverse();

  return resultArr;
}

/*

This is the same function but using .map

function digitList(number) {
  let numberStringArray = String(number).split("");

  let resultArr = numberStringArray.map(elem => Number(elem));

  return resultArr;
}

*/


digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]