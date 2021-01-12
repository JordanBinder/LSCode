/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: array of strings

Output: array of strings with no vowels present

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

removing vowels from an array of strings (helper):

map array of strings with param char
  call indexOf on vowels array so that
  if character is greater than 0 (in this cause would prove it's a vowel)
    return empty string in place of character
      else
        return the character
  return this ^

ultimate function:
  map array with callback string
    split string into array of characters
    call helper function on array to delete vowels in array of characters
    join array of characters to become string again
    (map will do this again for next string)
return this ^

Second, pseudocode:


C - code


Question:

Write a function that takes an array of strings,
and returns an array of the same values with all vowels (a, e, i, o, u) removed.


*/
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

function removeVowels(stringArray) {
  return stringArray.map(string => {
    let chars = string.split("");
    let removedVowels = deleteVowels(chars);
    return removedVowels.join("");
  });
}

function deleteVowels(array) {
  return array.map(char => {
    if (VOWELS.indexOf(char) >= 0) {
      return "";
    } else {
      return char;
    }
  });
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

/*
My biggest issue with this problem was figuring out how to get rid of the vowel
within the string. I wanted to use the delete operator but that is only for
objects. Replacing the character with an empty stirng is the way to do it

ALSO I now understand that a good way of breaking problems up is
to make a helper function when you need to manipulate an inner
array/object/element

AND THEN apply it to the actual function.

*/