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
sort subarrays
determine if elements in subarrays are odd
determine if sum of odd elements in subarrray are less than sum of odd elements in next subarray

Implicit Requirements:
We are changing the order of the subarrays, NOT the order of the elements in the subarrays themselves
can transform original array, but do we have to?

Questions: 

E - do a test case to see if everything is working

D - How will code look?
Pseduocode:

method call map
callback execution: param subarr
  return:
  declare sum variable
  for loop to iterate over elements in subarray
    if elem at subarr % 2 === 1 (meaning odd)
      .slice().push(elem at subarr)

C - code

*/

// Given the following data structure, sort the array so that the sub-arrays 
// are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
// [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]

/* initial attempt:
arr.map(subarr => {
  let sum = 0;

  for (let idx = 0; idx < subarr.length; i++) {
    if subarr[idx] % 2 === 1 {
      sum += subarr[idx];
    }
  } return sum;
});
*/

arr.sort((a, b) => {
  let oddSumA = a.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);
  let oddSumB = b.filter(num => num % 2 === 1)
                 .reduce((sum, next) => sum + next);

  return oddSumA - oddSumB;
});

// LS did it imperatively and my declarative way of doing it wouldn't work. This, I believe
// is because evaluating the sums would be impossible. Everything was accumulated to one variable across all subarrays.

// we also learned that method reduce is a way to sum things.