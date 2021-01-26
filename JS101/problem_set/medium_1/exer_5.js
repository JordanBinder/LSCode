/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: sentence

Output: sentence with number words replaced.

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?

array with numbers 0-9
array with numbers typed out zero through 9

A - algorithm

First, high level:

create array 0-9
create array zero-nine
let new var be array of strings by word

for loop over sentence with idx beginning 0 inc by 1
  if word[idx] exists in zero-nine
  store word in var
  replace with word at length of stored word

join array of strings var

return newly joined arr of strings var

Second, pseudocode:


C - code


Question:
Write a function that takes a sentence string as an argument,
and returns that string with every occurrence of a "number word" —
'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
'eight', 'nine' — converted to its corresponding digit character.


Notes:
for loop over array
  for loop for loop over zeroToNineWords
    if (array[idx] === zeroToNineWords[jdx])
      push zeroToNineWords[jdx].length to resultArr
*/

function wordToDigit(sentence) {
  let zeroToNineWords = ['zero',
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let array = sentence.split(" ");
  let resultArr = [];

  for (let idx = 0; idx < array.length; idx++) {
    if (array.includes(array[idx])) {
       wfor (let jdx = 0; jdx < zeroToNineWords.length; idx++) {
        if (array[idx] === zeroToNineWords[idx]) {
          resultArr.push(zeroToNineWords.indexOf(zeroToNineWords[jdx]));
        } else {
          resultArr.push(array[idx]);
        }
      }
    }
  }

  return resultArr.join(" ");
}

// eslint-disable-next-line max-len
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));

// "Please call me at 5 5 5 1 2 3 4. Thanks."

/* Postmortem:

Originally when I got stuck:
function wordToDigit(sentence) {
  let zeroToNineWords = ['zero',
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let array = sentence.split(" ");
  let resultArr = [];

  for (let idx = 0; idx < array.length; idx++) {
    if (array.includes(array[idx])) {
      for (let jdx = 0; idx < zeroToNineWords; idx++) {
        if (word[jdx] === zeroToNineWords[jdx]) {
          resultArr.push(word[jdx]);
        }
      }
    }
  }

  return array.join(" ");
}

Whoo wee. This was a mess of a problem for me that wasn't very hard
and We've done similar problems before. Unfortunate.

I got impatient and coded before my high level was ready. This was 
problem #1. My other issue was not thinking about RegEx as an
option. RegEx is great and I've taken enough time to learn it so I
should be applying it.

calling Map method on this also may have been a better strategy.

The nested for loops confused me and I should have had a better
gameplan for them before I started coding.

LS Solution:
const NUM_WORDS = {
  zero:  0,
  one:   1,
  two:   2,
  three: 3,
  four:  4,
  five:  5,
  six:   6,
  seven: 7,
  eight: 8,
  nine:  9,
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}
*/