/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: string with word(s)

Output: string with word(s) in reverse

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

Call split to go from string to array of words

let var result be Map param word with callback:
  if word's length is greater than 5
    call reverse on word


return result

Second, pseudocode:


C - code


Question:
Write a function that takes a string argument containing one
or more words, and returns a new string containing the
words from the string argument. All five-or-more letter words
should have their letters in reverse order.

The string argument will consist of only letters and spaces.
Words will be separated by a single space.


*/

function reverseWords(string) {
  let arrayOfStrings = string.split(' ');
  let result = arrayOfStrings.map(word => {
    if (word.length >= 5) {
      return reverseWord(word);
    } else {
      return word;
    }
  });
  return result.join(" ");
}

function reverseWord(string) {
  let result = string.split("").reverse().join("");
  return result;
}

reverseWords('Professional');             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

/* I did this one pretty well! I didn't originally think to keep
my function from exer 9 but it was useful here. Keep
Thinking about using functions within functions
To make things easier and a lot more readable.

*/