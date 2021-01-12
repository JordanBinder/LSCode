/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: string

Output: new string with characters doubled

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?


A - algorithm

First, high level:
iterate over string with for loop
  string at char is repeated twice

split string into array

map
  double each character with repeat method

join method to return string

return string

Second, pseudocode:


C - code
Write a function that takes a string, doubles every character in the string, and returns the result as a new string.


Question:


*/

function repeater(string) {
  let arr = string.split("");

  for (let idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx].repeat(2);
  }

  let result = arr.join("");

  return result;
}

repeater('Hello');        // "HHeelllloo"

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""


/*

function repeater(string) {
  for (let char = 0; char < string.length; char++) {
    string[char].repeat(2);
  }
  return string;
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

*/

//