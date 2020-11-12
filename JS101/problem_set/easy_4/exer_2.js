/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: 6 numbers from the user

Output: string logged to console that states if last number appears in first 5 numbers given

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
readline sync
empty array to push user input into

A - algorithm

First, high level:
declare readline-sync
declare empty array
ask user for inputs 1-6
assign each number to index position in array except last one

after input 6 is given,

iterate through array
  if last input is deeply equal to any elem in array
    log that last num appears in array
    else
      log that last num does not appear in array
Second, pseudocode:


C - code


Question:
Write a program that solicits six numbers from the user, then logs a message that describes 
whether or not the sixth number appears amongst the first five numbers.

*/

let rlsync = require('readline-sync');

let resultArray = [];

resultArray[0] = prompt(`Enter the first number`);
resultArray[1] = prompt(`Enter the second number`);
resultArray[2] = prompt(`Enter the third number`);
resultArray[3] = prompt(`Enter the fourth number`);
resultArray[4] = prompt(`Enter the fifth number`);
let comparisonNum = Number(prompt(`Enter the final number`));

function isInArray (array, num) {
  for(let idx = 0; idx < array.length; idx++) {
    if (array[idx] === num) {
      return true;
    } else {
      return false
    }
  }

  if (true) {
    console.log(`The number ${num} appears in ${String(array).split(" ")}`);
  } else {
    console.log(`The number ${num} does not appear in ${String(array).split(" ")}`);
  }
}

isInArray(resultArray, comparisonNum);

// I chose to iterate using a for loop when I could have used the method includes. Includes is the clearer and better way to go here.

//further exploration section: