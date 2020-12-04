/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: array

Output: number. Likely a value within the array

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?


A - algorithm

First, high level:
create a count variable
if 

Second, pseudocode:


C - code


Question:
Given an unordered array and the information that exactly one value in the array occurs twice 
(every other value occurs exactly once), determine which value occurs twice. 
Write a function that will find and return the duplicate value that is in the array.


*/




function moreThanOne(arr, elem) {
  let count = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === elem) {
      count += 1;
    }
  }
  return count;
}

function findDup(arr) {
  return arr.find(elem => moreThanOne(arr, elem) === 2);
}


findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73