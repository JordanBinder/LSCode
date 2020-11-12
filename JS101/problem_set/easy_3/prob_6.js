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
Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, 
and injects them into a story that you create.


*/

let readlineSync = require('readline-sync');

let noun = prompt(`Enter a noun:`);
let verb = prompt(`Enter a verb:`);
let adjective = prompt(`Enter a adjective:`);
let adverb = prompt(`Enter a adverb:`);

console.log(`Do you walk your ${adjective} ${noun} quickly? That's hilarious!
The ${adjective} ${noun} walks ${adverb} over the lazy ${noun}.
The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`);

// LS seperates each console log as variables. That is a cleaner way to do it.
// let sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
// let sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
// let sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

// console.log(sentence1);
// console.log(sentence2);
// console.log(sentence3);