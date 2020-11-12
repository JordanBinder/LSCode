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
return array of objects
returned objects are those with only 

Implicit Requirements:

Questions: 


E - do a test case to see if everything is working

D - How will code look?
Pseduocode:

method call filter
callback execution: param obj
call Object.values on obj to access arrays
method call every on arrays
callback exec: param elem
  if every element is even
    return true;
      else:
        return false

C - code

*/

// Given the following data structure, write some code to return an array which 
// contains only the objects where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
/* initial attempt
arr.filter(obj => {
  let array = Object.values(obj);

  return array.every(elem => {
    if (elem % 2 === 0) {
      return true;
    } else {
      return false;
    }
  });
});
*/ 
// LS answer
arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

// => [ { e: [ 8 ], f: [ 6, 10 ] } ]

// using every twice to get to the elements, thus returning truthy values twice, is a good strategy here.