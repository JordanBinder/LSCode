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
new array 
identical in structure
only contains elements that are multiples of 3

Implicit Requirements:
Will still be array of arrays

Questions: 
Will slice be the way to make it a new array?

E - do a test case to see if everything is working

D - How will code look?
Pseduocode:

call slice on arr
call map with param arr with callback:
  return arr filtered with callback param elem
    return if (elem divided by 3 === 0)

C - code

*/

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

arr.slice().map(arr => {
  return arr.filter(elem => {
    return (elem % 3 === 0);
  });
});

// Given the following data structure, use a combination of methods, including filter, to return 
// a new array identical in structure to the original, but 
// containing only the numbers that are multiples of 3.


// I DID IT RIGHT!

