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
3 empty arrays
1 for first half
1 for second half
1 for result array that will have other 2 arrays pushed into it.

A - algorithm

First, high level:

Second, pseudocode:
declare 3 empty arrays
declare halfwayPt

forEach variable in arr
  if findIndex of value is less than halfwayPt
    push to firstArr
    else
      push to secondArr
  push firstArr to result
  push secondArr to result

  return resultArr

C - code


Question:

Write a function that takes an array as an argument, and returns an array that contains two elements,
each of which is an array. Put the first half of the original array elements in the first element 
of the return value, and put the second half in the second element. If the original array contains 
an odd number of elements, place the middle element in the first half array.

*/

function halvsies (arr) {
  let halfwayPt = Math.ceil(arr.length / 2);
  let firstArr = arr.slice(0, halfwayPt)
  let secondArr = arr.slice(half);
  let resultArr = [firstArr, secondArr];




  return resultArr;
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]
