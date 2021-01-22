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

To rotate once:

call rotateRightmostDigits with input param and count being 0

to rotate again with 1st digit in place:
slice first digit and apply rotateRightmostDigits with count 0


edge case: leading zeroes. How to fix?
  Happens by itself
Second, pseudocode:


C - code


Question:

*/

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstPart = numberString.slice(0, numberString.length - count);
  let secondPart = numberString.slice(numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

function maxRotation(number) {
  let stringedNum = String(number);
  let staticDigits;

  for (let idx = 1; idx < stringedNum.length; idx++) {
    let rotatedNums = rotateRightmostDigits(number, 0); // returns stringed num with all digits pushed left
    staticDigits.push(rotatedNums.slice(0, idx));// hold digit with idx
  }

  return staticDigits;
}



maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

/* Postmortem:
LS Solution:

function maxRotation(number) {
  let numberDigits = String(number).length;
  for (let count = numberDigits; count >= 2; count--) {
    number = rotateRightmostDigits(number, count);
  }
  return number;
}

My big issue here was thinking that the count param needed an integer.
Also, I made an assumption that we couldn't reassign the param within
the for loop. That was silly.

We already built the feature in exer_2.js. What we needed to do here was
apply it the required amount of times for the given input number.

I see now.
*/