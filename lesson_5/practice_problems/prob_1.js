/* 
The purpose of these practice problems is to let you 
practice the specific concepts covered in the last three assignments. 
If any of the problems seem hard at first, take the time to break them down 
and remember to focus on the structure of the collection object, the return value of callbacks 
and methods and the side effects of any methods.
*/

// How would you order the following array of number strings by descending numeric value 
// (largest number value to smallest)?

/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - input is arr. Output is arr with elements transformed by sorting in descending numeric value.

Questions: 
Do we need new array or to transform old array (assuming transforming right now)? Answer is transform old array.
Can we use sort? Yes.

E - do a test case to see if everything is working

D - How will code look?
Pseduocode:

method call sort on arr
callback execution code:

2 parameters, a and b
returns b - a: => b - a;

done on one line

C - code

arr.sort((a, b) => b - a);

arr;

*/

let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => b - a);

arr;

// This worked.

// LS soltuion: arr.sort((a, b) => Number(b) - Number(a));

// LS solution is better because it took into account that these were strings of numbers. I neglected to see that. I got lucky that JS
// converted these to numbers for me.