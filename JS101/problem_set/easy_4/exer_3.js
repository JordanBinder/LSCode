/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: 

Output:

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?


A - algorithm

First, high level:

Second, pseudocode:


C - code


Question:


*/

let rlsync = require('readline-sync');

console.log(`What is your age?`);
let currentAge = Number(prompt());
console.log(`At what age would you like to retire?`);
let retirementAge = Number(prompt());

let yearsLeft = retirementAge - currentAge;

let retirementYear = 2020 + yearsLeft;

console.log(`It's 2020. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsLeft} years of work to go!`);

// I hard coded the date compared to LS that used new Date and getFullYear

//use rlsync.question instead of prompt to get rid of bug that states 'undefined'