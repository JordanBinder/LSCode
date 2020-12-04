/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: 2 arrays

Output: 1 array with each of the values 

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
result array

A - algorithm

First, high level:



Second, pseudocode:
declare result array

for idx = 0
  push to result arr arr1[idx] and arr2[idx]

return result

C - code


Question:
Write a function that combines two arrays passed as arguments, and returns a new array that
contains all elements from both array arguments, with each element taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same number of elements.


*/

function interleave (arr1, arr2) {
  let resultArr = [];
  
  for (let idx = 0; idx < arr1.length; idx++) {
    resultArr.push(arr1[idx], arr2[idx]);
  }
  return resultArr;
}



interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

