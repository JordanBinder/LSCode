/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: array

Output: string that shows each element and number of times the element occured in 
input array.

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?
For loop will likely work

E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
Empty object to add elements to

A - algorithm

First, high level:

if arr[elem] is not present in empty obj
  arr[elem] is now obj[arr][elem] = 1
  else 
    obj[arr][elem] += 1

log each element with a method - probably entries.

Second, pseudocode:


C - code


Question:
Write a function that counts the number of occurrences of each element in a given array. 
Once counted, log each element alongside the number of occurrences. 
Consider the words case sensitive e.g. ("suv" !== "SUV").


*/
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];


function countOccurrences(arr) {
  let obj = {};

  arr = arr.map(el => el.toLowerCase()); // added to make case insensitive - further exploration
  for (let idx = 0; idx < arr.length; idx++) {
    let elem = arr[idx];

    obj[elem] = obj[elem] || 0;
    obj[elem] += 1;
  }

  console.log(obj);
}

// function logOccurances ()

countOccurrences(vehicles);


// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2