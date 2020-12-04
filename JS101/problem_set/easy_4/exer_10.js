/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: string

Output: string with every word's first and last character swapped

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
array of words using methods split

A - algorithm

First, high level:

create array of words using split

for loop with idx = 0
  if word at idx's length is greater than 1
    return word
    else
      return word at idx is now first letter + slice first and last character off

return the altered words back to string with method join

Second, pseudocode:


C - code


Question:

Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will 
always contain at least one word. You may also assume that each string contains nothing but words and spaces,
and that there are no leading, trailing, or repeated spaces.


*/

function swap(words) {
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx++) {
    wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
  }

  return wordsArray.join(' ');
}


function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }// edge case

  return word[word.length - 1] + word.slice(1, word.length - 1) + word[0]; // what it will return
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

/*
Launch school seperated the function into 2 which made for a much clearer solution than mine

function swap(words) {
  let wordsArray = words.split(' ');

  for (let idx = 0; idx < wordsArray.length; idx++) {
    wordsArray[idx] = wordsArray[idx][wordsArray[idx].length - 1] + wordsArray[idx].slice(1, wordsArray[idx].length - 1) + wordsArray[idx][0]; // what it will return
  }

  return wordsArray.join(' ');
}



The reason mine sucks is because of how confusing and long line 89 is. It works, but it's confusing. Calling the swapFirstLastCharacters
function on wordsArray[idx] is much clearer and makes the edge case possible to account for. I couldn't figure out a way to make
if(wordsArray[idx].length === 1) work without the code getting stuck.

*/