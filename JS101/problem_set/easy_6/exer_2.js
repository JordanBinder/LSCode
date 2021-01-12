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

Output: new string with characters doubled except vowels

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
  working function?

Contains variable with all letters except aeiou

A - algorithm

First, high level:
declare consonants variable

split string
for loop with idx 0
  if arr at current index contains anything in consonants
    arr[idx] = arr[idx].repeat(2)

result var joins array
return result var

Second, pseudocode:


C - code


Question:
Write a function that takes a string, doubles every consonant character
in the string,
and returns the result as a new string.
The function should not double vowels
('a','e','i','o','u'), digits, punctuation, or whitespace.


*/


function doubleConsonants(string) {
  const CONSONANTS = "bcdfghjklmnpqrstvwxyz";
  let array = string.split("");

  for (let idx = 0; idx < array.length; idx++) {
    if (CONSONANTS.includes(array[idx].toLowerCase())) {
      array[idx] = array[idx].repeat(2);
    }
  }
  let result = array.join("");

  return result;
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"