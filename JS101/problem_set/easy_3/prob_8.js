/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: 3 primitive numbers

Output: string representing a grade

Explicit requirements: 

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?


A - algorithm

First, high level:
let mean var be - Determine mean grade by adding firstNum, secondNum and thirdNum, then dividing by 3

write if else table so that is var mean falls in certain range, it will return A-F.
Second, pseudocode:


C - code


Question:

Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.


*/
function getGrade(firstNum, secondNum, thirdNum) {
  let mean = (firstNum + secondNum + thirdNum) / 3;

  if (mean >= 90) {
    return `A`;
  } else if (mean >= 80) {
    return `B`;
  } else if (mean >= 70) {
    return `C`;
  } else if (mean >= 60) {
    return `D`;
  } else {
    return `F`;
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

// Did this correctly and more cleanly than LS. Maybe less ovbious to someone that doesn't know the code though.
// Good job!