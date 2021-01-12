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

split into array of elements

map array of elements
  if element's index is even (because begins at 0)
    element to upper case
      else
        element to lower case
join array so it's a string again

return string

Second, pseudocode:


C - code


Question:
Write a function that takes a string as an argument,
and returns that string with a staggered capitalization scheme.
Every other character, starting from the first, should be capitalized
and should be followed by a lowercase or non-alphabetic character.
Non-alphabetic characters should not be changed, but should be counted
as characters for determining when to switch between upper and lower case.

*/

/* inital attempt before looking behind solution
function staggeredCase(string) {
  let result = string.toLowerCase().split("");

  let resultArray = result.map(el => {
    if (result.indexOf(el) % 2 === 0) { // even
      return el.toUpperCase();
    } else {
      return el.toLowerCase();
    }
  });

  return resultArray.join("");
}

I had the correct logic but was coming up with unexpected
errors when using the indexOf method.
I forgot that I can have a 'current val' parameter in my callback. This
Servces as the index here which is exactly what we need.
Will remember in the future.

Why does indexOf NOT work here? I don't know 100%. Seems to break
after seeing the same char code in utf-16.
Second time around will just assign it -1 aka toUpperCase.
*/

function staggeredCase(string) {
  let result = string.toLowerCase().split("");

  let resultArray = result.map((el, idx) => {
    if (idx % 2 === 0) { // even
      return el.toUpperCase();
    } else {
      return el.toLowerCase();
    }
  });

  return resultArray.join("");
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
