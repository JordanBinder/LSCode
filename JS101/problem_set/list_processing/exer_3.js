/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: 2 arrays of numbers

Output: 1 new array of numbers

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?
new empty array as result

A - algorithm

First, high level:

Declare new empty array

Method call forEach on arr1 to get to its elements elem1
  method call forEach on arr2 to get to its elements elem2
    push to new array elem1 * elem2

return new array

Second, pseudocode:


C - code


Question:

Write a function that takes two array arguments,
each containing a list of numbers,
and returns a new array containing the products
of all combinations of number pairs that
exist between the two arrays.
The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

*/

let resultArr = [];

function multiplyAllPairs(arr1, arr2) {
  arr1.forEach(elem1 => {
    arr2.forEach(elem2 => {
      resultArr.push(elem1 * elem2);
    });
  });
  return resultArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]

// could I have done the same thing with the map method?


// function multiplyAllPairs(arr1, arr2) {
//   return arr1
//          .reduce((products, num1) => {
//            return products.concat(arr2.map(num2 => {
//              return num2 * num1;
//            }));
//          },[])
//          .sort((a, b) => a - b);
// }


// This solution using map is not mine but was a clever
// way to solve the problem
// interested if it's a better solution overall.