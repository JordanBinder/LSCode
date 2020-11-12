/* 
The purpose of these practice problems is to let you 
practice the specific concepts covered in the last three assignments. 
If any of the problems seem hard at first, take the time to break them down 
and remember to focus on the structure of the collection object, the return value of callbacks 
and methods and the side effects of any methods.
*/

/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 

Explicit requirements:
Need to go from array of arrays to one object


Implicit Requirements:

Questions: 

E - do a test case to see if everything is working

D - How will code look?
Pseduocode:


C - code

*/

// Given the following data structure, write some code that returns an object where the key is the first item 
// in each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
/* 
let result;

Object.assign(result, arr);
*/
// I should have made the result variable an empty object and iterated through the array of arrays using forEach

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let obj = {};
arr.forEach(subarray => {
  let key = subarray[0];
  let value = subarray[1];

  obj[key] = value;
});

obj; // { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }