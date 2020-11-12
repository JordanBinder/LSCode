// advanced PEDAC study group
// introductions
  // what is your experience with PEDAC so far?
// PEDAC overview
// Questions?
// Solve a problem with PEDAC
  // PED together
  // Come up with individual algorithms
  // Write a solution

/*
INSTRUCTIONS
Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5. 

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. 

Input will consist of alphabetic characters, both uppercase and lowercase.  No spaces.


PROBLEM
Input: array of strings

Output: array of the number of letters -> letters that match position

Explicit: determine true when position in word is deeply equal to position in alphabet
  alphabetic only

Implicit:
 case insensitive
 ignore anything not alphabetic
 count should be zero if no position matchers

EXAMPLES/TEST CASES
solve(["abode","ABc","xyzD"]) // [4,3,1]
solve(["abide","ABc","xyz"])  // [4,3,0]
solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]) // [6,5,7]
solve(["encode","abc","xyzD","ABmD"]) // [1, 3, 1, 3]


DATA STRUCTURES
array or object with alphabet 
  iterate over each string in our arg array??

result array
Number to track our matches

ALGORITHM

declare variable alphabet with string containing alphabet
declare result array as empty array

algorithm
create an array with the alphabet 
create a variable to keep count of letters that match positions
iterate over the array of strings and lowercase them
  iterate over string character
    - compare the string index with alphabet position array
    - if the string index matches alphabet position increment count variable
  return count
return array of counts



create an array that contains all alphabet letters in order
for each element of the input array:
1) make the string toLowerCase();
2) compare if the alphabet array has the same letter at the given index as the input array
if it is, incremenet counter
if it is not, go to the next character - boris



declare variable alphabet with string containing alphabet
declare result array as empty array

declare function solve with argument string
  declare var counter = 0
  for loop with idx = 0
    if alphabet[idx] is deeply equal to string[idx]
      counter is incremented by 1
  push to result array counter


*/
CODE
