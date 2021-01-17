/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: string, bigger string

Output: number times string appears in bigger string

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?

count variable

A - algorithm

First, high level:


Second, pseudocode:


C - code


Question:

Write a function that takes a word and a string of text as parameters,
and returns an integer representing the number
of times the word appears in the text.

You may assume that the word and text inputs will always be provided,
and that all word breaks are spaces. Thus, some words will include
punctuation such as periods and commas.

*/

// eslint-disable-next-line max-len
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

function searchWord(word, text) {
  let ucWord = word.toUpperCase();
  let count = 0;
  let array = text.toUpperCase().split(' ');

  for (let idx = 0; idx < array.length; idx++) {
    if (ucWord === array[idx]) {
      count += 1;
    }
  }
  return count;
}


// My only problem with this problem was not accounting for uppercase letters.

console.log(searchWord('sed', text));     // 4
searchWord('est', text);     // 0
searchWord('est,', text);    // 2