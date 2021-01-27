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

Output: object with percentages as values

Explicit requirements:

Implicit Requirements:

counts empty spaces in the "neither" key

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

  let neither = array.filter(char => {
    return char.match(/[^a-zA-Z]/g);
  });
  
  return neither;
}
This is how I tested that the filter worked.

D - What kind of data structures will you need to create or manipulate to create
working function?
key value pair object
variable to track length of string
empty array

A - algorithm

First, high level:
create key-value pair obj
create var equal to length of string
create lowercase arr
create uppercase arr
create neither arr
create arr of strings from string

lowercase is filtered stringed arr by lowercase chars
obj[lowercase] = lowercase.length / length var

uppercase is filtered stringed arr by uppercase chars
obj[lowercase] = uppercase.length / length var

neither is filtered stringed arr by neither chars
obj[lowercase] = neither.length / length var

return obj;

Second, pseudocode:


C - code


Question:
Write a function that takes a string, and returns
an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

You may assume that the string will always contain at least one character.
Notes:

*/


// eslint-disable-next-line max-lines-per-function
function letterPercentages(string) {

  let length = string.length;
  let array = string.split("");

  let lowercase = array.filter(char => {
    return char.match(/[a-z]/g);
  });

  let uppercase = array.filter(char => {
    return char.match(/[A-Z]/g);
  });

  let neither = array.filter(char => {
    return char.match(/[^a-zA-Z]/g);
  });

  let obj = {
    lowercase: ((lowercase.length / length) * 100).toFixed(2),
    uppercase: ((uppercase.length / length) * 100).toFixed(2),
    neither: ((neither.length / length) * 100).toFixed(2)
  };
  return obj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

/* Postmortem:

  let lowercase = array.filter(char => {
    let lcOnly = /[a-z]/g;
    return new RegExp(lcOnly, 'g');
  });

  ^^^ filter cannot use a RegEx (I believe) which is why this doesnt' work.
  If you use match, it will work.

  My above answer is correct but doesn't account
  for an empty upper, lower, or neither array.
  I should have considered that but didn't.
  Need to test all cases instead of just the first one.

  One bad habit I found here was turning the input string into an array.
  This is not always necessary. In this case, it cleaner to not need to
  transform data types. Filter and the array transformation
  was an unnecessary step.
*/