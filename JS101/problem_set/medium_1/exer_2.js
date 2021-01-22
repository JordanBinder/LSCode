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
  number
  and count (signifies how many digits in num to rotate starting from right)

Output:
  number after having rotated count number of numbers

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
use count to determine how many digits to isolate

turn number into string and assign var
make new variable = stringedNum.slice(count)

slice new var using slice and add new var at 0 to result var



Second, pseudocode:


C - code


Question:
Write a function that rotates the last count digits of a number.
To perform the rotation, move the first of the digits that you want
to rotate to the end and shift the remaining digits to the left.
*/

function rotateRightmostDigits(number, count) {
  let stringedNum = String(number);
  let slicedStringedNum = stringedNum.slice(stringedNum.length - count);
  let toJoinStringedNum = stringedNum.slice(0, stringedNum.length - count);
  slicedStringedNum = slicedStringedNum.slice(1) + slicedStringedNum[0];

  let result = Number(toJoinStringedNum + slicedStringedNum);

  return result;
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917

/* Postmortem:
  I DID THIS RIGHT AND ON MY OWN!!!!! Woot woot.
  Looking at LS, I see that they seperated the processes into 2 functions.
  This makes sens to do and I didn't think to do that.
  It is built into my PEDAC template to ask myself that questions so I will
  do so next time.
*/