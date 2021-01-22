/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: array

Output: new array with first element from input as last element.

Explicit requirements:
  first element of input array becomes last element of new array

Implicit Requirements:
  if only one element in input array, return input array

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:

slice original array so we have shallow copy
create empty array
push from sliced array the first element into empty array
pop element from empty array into sliced array (so it's last)
return sliced array


Second, pseudocode:


C - code


Question:
Write a function that rotates an array by moving the first element
to the end of the array. Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.


*/

function rotateArray(array) {
  let resultArray = array.slice(0);
  let holdingArray = [];

  if (array.length === 0) {
    return undefined;
  }// if empty array

  // if (array !== typeOf) {
  //   return undefined;
  // } // if not array

  holdingArray.push(resultArray[0]);
  resultArray.push(holdingArray);

  return resultArray;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

/* Postmortem:
LS Solution:

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}

SO MUCH SIMPLER! GAHHH. Some errors on my part:

I thought to use typeOf instead of Array.isArray. That was just forgetting
Array.isArray is a thing. gadoy.

If I remembered concat creates a new array that would have made
the choice to use it ovbious.
*/