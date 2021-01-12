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

Output: array with all available substrings in a particular order

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?

Yes. Use previous leadingSubstrings fxn

E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?
another empty array to push to

A - algorithm

First, high level:

create result array empty

for loop over string with idx 1
  call substring on string with idx as the starting position
  push the output of leadingSubstrings fxn (outputs all substrings) to new array

Second, pseudocode:


C - code


Question:
Write a function that returns a list of all substrings of a string.
Order the returned list by where in the string the substring begins.
This means that all substrings that start at position 0 should come first,
then all substrings that start at position 1, and so on.
Since multiple substrings will occur at each position,
return the substrings at a given position from shortest to longest.

You may (and should) use the leadingSubstrings function
you wrote in the previous exercise:

*/

// function substrings(string) {
//   let result = [];
//   for (let idx = 0; idx < string.length; idx++) {
//     result.push(leadingSubstrings(string));

//   }
//   return result;
// }

function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let resultArray = [];

  for (let idx = 1; idx <= string.length; idx++) {
    let substr = string.substring(0, idx);
    resultArray.push(substr);
  }
  return resultArray;
}

console.log(substrings('abc'));

