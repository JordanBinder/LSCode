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
new array, same structure, each number incremented by 1

Implicit Requirements:

Questions: can we slice because it is an array of objects?
Which is better, forEach or map?
map is the answer, they said it in the prompt lol

E - do a test case to see if everything is working

D - How will code look?
Pseduocode:

call slice
call map with callback param obj
  use Object.values to get array of arrays with values as elements
  return map with callback param values
    return values += 1

C - code

*/

// Given the following data structure, use the map method to return a new array identical in structure 
// to the original but, with each number incremented by 1. Do not modify the original data structure.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

/*
arr.slice().map(obj => {
  return Object.values(obj).map(elem => elem += 1);
});
*/
// I got the above to work but I could not continue because I was left with the correct elements, but as an array of arrays. 
// Idk if there is a way to take this code and then transform that array of arrays to an object.

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }

  return incrementedObj;
}); // => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]

arr; // => [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]