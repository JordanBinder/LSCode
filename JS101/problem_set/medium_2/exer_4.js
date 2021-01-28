/* eslint-disable max-len */
/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: year as num

Output: num of how many Friday the 13th's there were

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?

count variable for # of Friday 13th's.


A - algorithm

First, high level:

create count variable

var firstMonday = call getDate on January 1st, 1986

Second, pseudocode:


C - code


Question:
Some people believe that Fridays that fall on the 13th day of the month are considered to be unlucky days.
Write a function that takes a year as an argument, and returns the number of Friday the 13ths in that year.
You may assume that the year is greater than 1752, which is when the United Kingdom adopted the
modern Gregorian Calendar. You may also assume that the same calendar will remain in use for the foreseeable future.

Notes:

*/

function fridayThe13ths(year) {
  const FIRST_DATE = new Date(year);
  
  return FIRST_DATE.getDate();
}

console.log(fridayThe13ths(1986));      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

/* Postmortem:

*/