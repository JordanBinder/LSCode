/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: string with words and with other non-alphabetic characters

Output: string without non-alphabetic characters, replaced by 1 space only

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
string with alphabet

A - algorithm

First, high level:
declare alphabet var
declare counter var
iterate over the string - for loop
  if string elem at given index is not in alphabet && the following string elem at given index is not in alphabet
    replace with " "
    else 
      replace with " "

// I didn't consider for some reason pushing to an empty string. Not sure why I got hung up on the replacing method.
Second, pseudocode:


C - code


Question:
Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns 
that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur 
in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

*/

// let alphabet = 'abcdefghijklmnopqrstuvwxyz ';
// let counter = 0;

function cleanup(string) {

}
cleanUp("---what's my +*& line?");    // " what s my line "

function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

// I love the way LS did these isLower / isUpper functions. So clean and when I tried to do a lookup string, it didn't work.