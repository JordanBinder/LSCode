/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: none

Output: console log with random number

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?


A - algorithm
First, high level:

create function randomAge
  returns a random number between 20 and 120 inclusive
  
console.log (`Teddy is ${randomAge} years old`);

Second, pseudocode:


C - code


Question:


*/

//my attempt
// let randomAge = Math.floor(Math.random() * 120)

// function age (max) {
//   do randomAge;
  
  
//   while (randomAge < 20) {
    
//   }
// }

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);

// What I got caught up on here were the parameters of the function. By making them min and max, 
// you have 2 things to pass through which makes 
// everything much more understandable.

// you can make this more robust by making (max - min + 1) into ((Math.abs(max - min)) + 1). This way if params are switched
// the program still works.

// if Math.round() was used, we would need to rework the function as we would no longer be working with a multiplied num between
// 0 and 1

function randomAge() {
  let num = Math.floor(Math.random() * 120);
  while (num < 20) {
    num = Math.floor(Math.random() * 120);
  } console.log(`Teddy is ${randomAge()} years old!`)
}