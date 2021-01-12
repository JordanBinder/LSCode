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

Output: array of substrings, ordered shortest to longest

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?
empty array

A - algorithm

First, high level:

declare empty result array

create loop with index 0, increment by 1
  substring starting at 0, ending at idx, then push

  (they will be in order already)

return result array

Second, pseudocode:


C - code


Question:

Write a function that takes a string argument,
and returns a list of all substrings that start from the
beginning of the string, ordered from shortest to longest.


*/

function leadingSubstrings(string) {
  let resultArray = [];

  for (let idx = 1; idx <= string.length; idx++) {
    let substr = string.substring(0, idx);
    resultArray.push(substr);
  }
  return resultArray;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/*
Rewrite leadingSubstrings using list processing functions.
That is, convert the string into an array of some sort
and use functions like map, filter, or reduce to get the desired substrings.
(You will also need to use join.) Try not to use forEach as
that is too similar to the for loop approach.

algorithm using map:

create new array with sliced string as word
map with callback



function leadingSubstringsFurtherExploration(string) {
  let resultString = "";
  let stringedArray = string.split("");
  let result = stringedArray.map(character => {
    resultString += character;
    return resultString;
  });

  return result;
}


console.log(leadingSubstringsFurtherExploration('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

*/