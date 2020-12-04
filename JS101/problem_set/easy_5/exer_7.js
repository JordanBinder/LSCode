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

Second, pseudocode:


C - code


Question:

Write a function that takes two array arguments, each containing a list of 
numbers, and returns a new array that contains the product of each pair 
of numbers from the arguments that have the same index. You may assume 
that the arguments contain the same number of elements.


*/

function multiplyList (arr1, arr2) {
  let resultArr = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    let value = 1;
    value = value * (arr1[idx] * arr2[idx]);
    resultArr.push(value);
    value = 1;
  }

  return resultArr;
}

/*
function multiplyList(numbers1, numbers2) {
  let result = [];

  for (let idx = 0; idx < numbers1.length; idx += 1) {
    result.push(numbers1[idx] * numbers2[idx]);
  }

  return result;
}

LS solution is slightly clearer because they had no need to declare a value
variable. Otherwise they work the same. Next time, think if you can make this clearer
by avoiding extra declarations.


Student solution:
const multiplyList = (arr1, arr2) => arr1.map((el, idx) => el * arr2[idx]);
Why does this work?
I think this works because you are mapping to a new array with built in map fxn.
el represents the elements in arr1, and then arr2's values are able to be
accessed using arr2[idx]. We then execute the callback fxn which takes the callback's results
and populates them into a new array.
*/