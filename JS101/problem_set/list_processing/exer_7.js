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

define if it's a palindrome function:

return true or false if:
  substring has length greater than 1 AND is true in reverse
  (using built in methods)

palindrome function:


call substrings fxn on input string to get array of all possible substrings
  call filter on this with condition being the above function isPalindrome.

return the result of the above

Second, pseudocode:


C - code


Question:
Write a function that returns a list of all palindromic substrings of a string.
That is, each substring must consist of a sequence of characters that reads the
same forward and backward. The substrings in the returned list should be sorted
by their order of appearance in the input string.
Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous
exercise.

*/


function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

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

// test cases

palindromes('abcd');       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]