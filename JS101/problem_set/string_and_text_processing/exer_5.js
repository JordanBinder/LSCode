/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: string

Output: string with uppercase and lowercase flipped

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?

split string by letter

map by element
  if element.toUpperCase === element
    return element.toLowerCase
      else
        return element.toUpperCase

return joined array so it's a string again

A - algorithm

First, high level:


Second, pseudocode:


C - code


Question:
Write a function that takes a string as an argument, and returns that string
with every lowercase letter changed to uppercase and every uppercase letter
changed to lowercase. Leave all other characters unchanged.



*/

function swapCase(string) {
  let resultString = string.split("").map(el => {
    if (el.toUpperCase() === el) {
      return el.toLowerCase();
    } else {
      return el.toUpperCase();
    }
  });

  return resultString.join("");
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"