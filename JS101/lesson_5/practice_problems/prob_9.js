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
New array with subarrays ordered

Implicit Requirements:

Questions: Will we want typeOf to determine what should happen when sorting?

E - do a test case to see if everything is working

D - How will code look?
Pseduocode:

declare below with new variable? No need
use map on arr to access subarrays
map again to access elements
if type is number
  sort normally
    else:
      sort with callback a - b

C - code

*/

// Given the following data structure, return a new array with the same structure, but with the subarrays ordered -- 
// alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let resultArray;

arr.map(subarray => {
  return subarray.map(elem => {
    if (typeof subarray[0] === 'number') {
      subarray.sort();
    } else {
      subarray.sort((a, b) => a - b);
    };
  });
});

// I got numbers and words backwards for how sort sorts things. Numbers need a - b.
// Also, I went too deep with the maps as what I needed to manipulate were the subarrays, not the elements themselves.

arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort();
  } else {
      return subArr.slice().sort((a, b) => a - b);
  }
});

// ALSO, we didn't think to use slice because we thought we should declare everything to a new variable. This would not work tho
// because we would still be pointing to arr, the same array in memory.