/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: 

Output:

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?


A - algorithm

First, high level:
create string with all non-alphanumeric characters except space


Second, pseudocode:


C - code


Question:

Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size. 
For instance, the word size of "it's" is 3, not 4.

call method

*/

function wordSizes(words) {
  let str = words.replace(/[^\w\s]/gi, '');
  let arr = str.split(" ");
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


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

// I used google to essentially figure out what regex will 
// help me keep the spaces intact but eliminiate all other non-alphanumeric characters. Then applied that to method replace.
// The LS solution does not use this built-in method and I should understand that way of doing it too.

/*********** HAVE SOMEBODY EXPLAIN LINE 91 TO YOU IF YOU CAN
function wordSizes(words) {
  let wordsArray = words.split(' ');
  let count = {};

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let cleanWordSize = removeNonLetters(wordsArray[idx].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }

    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }

  return count;
}

function removeNonLetters(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}


wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }

*/
