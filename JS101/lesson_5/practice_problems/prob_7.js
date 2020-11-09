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

Implicit Requirements:

Questions: 

E - do a test case to see if everything is working

D - How will code look?
Pseduocode:


C - code

*/

// Given the following code, what will the final values of a and b be? Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2; // guess: arr[0] will be 4, which is correct, but a remains 2, which is correct
arr[1][0] -= a; // guess: [3, 8]

/*
a is a primitive value - a number. It is not being modified when arr[0] is being changed
b is an array, and b in arr is pointing to a specific point in memory. That is why it is changed.
*/