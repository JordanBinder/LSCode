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

Output: Object with keys relating to number of characters in word 
and values representing the number of words with that many characters

Explicit requirements: returning object. Also, all characters other than spaces are counted in key count

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?

Will we be calling a method on the string to transform it into an object?
OR will we be counting the words/characters and evaluating those returns in a new object?

E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
var to contain split string aka array of words
var empty object

A - algorithm

First, high level:

declare function wordSizes
Declare empty obj - obj

declare arr = split string into array of words

for loop with idx at 0
  make variable wordLength equal to arr[idx].length
  if wordLength is 0
    Do nothing. AKA continue stmt.
  
  if obj[wordLength] doesn't exist yet. aka it's NOT present
    obj at arr[idx].length = 0 to put it in the object
  
  obj at the wordLength is incremented by 1

Second, pseudocode:


C - code


Question:

Write a function that takes a string consisting of zero or more space separated words, 
and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.
*/

function wordSizes(words) {
  let arr = words.split(" ");
  let obj = {};

  for (let idx = 0; idx < arr.length; idx++) {
    let wordSize = arr[idx].length;

    if (wordSize === 0) {
      continue;
    }

    if (!obj[wordSize]) {
      obj[wordSize] = 0;
    }
    obj[wordSize] += 1;
  }

  return obj;
}

wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}



