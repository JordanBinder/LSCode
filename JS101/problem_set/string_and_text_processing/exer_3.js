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

Output: object with values representing lowercase
uppercase and neither characters in input string

Explicit requirements:

Implicit Requirements:
spaces count as neither. Neither is anything not alphanumeric.

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?

Empty object to increment its values

A - algorithm

First, high level:

create empty object with correct keys
create const a-z
create const A-Z

split string into array of strings by element

for each element:
  if char code at element is between a-z
    add 1 to lowercase
      else if between A-Z
        add 1 to uppercase
          else
            add 1 to neither

Second, pseudocode:


C - code


Question:
Write a function that takes a string and returns an
object containing three properties:
one representing the number of characters in the string that are
lowercase letters,
one representing the number of characters that are uppercase letters,
and one representing the number of characters that are neither.

*/

/* my solution
function letterCaseCount(string) {
  // const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  // const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let resultObj = { lowercase: 0, uppercase: 0, neither: 0};

  for (let idx = 0; idx < string.length; idx++) {
    if ((string.charCodeAt(string[idx]) >= 65) &&
        (string.charCodeAt(string[idx]) <= 90)) {
      resultObj.uppercase += 1;
    } else if ((string.charCodeAt(string[idx]) >= 97) &&
               (string.charCodeAt(string[idx]) <= 122)) {
      resultObj.lowercase += 1;
    } else {
      resultObj.neither += 1;
    }
  }
  return resultObj;
}
*/


// my RegEx solution
function letterCaseCount(string) {

  let upper = string.match(/[A-Z]/g) || []; // returns array that you will get length from
  let lower = string.match(/[a-z]/g) || []; // you want the empty array so error isn't thrown.
  let neither = string.match(/[^a-zA-Z]/g) || [];

  return {
    lowercase: lower.length,
    uppercase: upper.length,
    neither: neither.length,
  };
}

/*
Same exact logic in my solution except i'm coming up with too many things
registering as lowercase. LS used just the string instead of method charCodeAt.
Didn't know that was possible. Will do that next time.

LS solution:

function letterCaseCount(string) {
  let counts = { lowercase: 0, uppercase: 0, neither: 0 }

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if ((char >= 'a') && (char <= 'z')) {
      counts.lowercase += 1;
    } else if ((char >= 'A') && (char <= 'Z')) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  }

  return counts;
}
*/


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
