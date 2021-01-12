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
What kind of loop might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:

Second, pseudocode:


C - code


Question:
Write a function that takes a string argument consisting of a first name,
a space, and a last name, and returns a new string consisting of the last
 name, a comma, a space, and the first name.

swapName('Joe Roberts');    // "Roberts, Joe"

*/

function swapName(name) {
  let result = name.split(" ").reverse().join(", ");

  return result;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Did this correctly.

/*
function swapName(nameString) {
  let nameArray = nameString.split(' ');
  nameArray.unshift(nameArray.pop() + ',');
  return nameArray.join(' ');
}
*/
// found on LS - further exploration. Knowing unshift well would have helped me