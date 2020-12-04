/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: array of integers (any length)

Output: string representing number to third decimal place

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?

result var

A - algorithm

First, high level:

multiply all values 
divide result by length of array
make result 3 decimal places
return result as string w/ 3 decimal places

Second, pseudocode:
declare result var = 1

for loop w/ idx = 0
  result equals result * arr[idx]

result is divided by arr.length

result is toFixed at 3 decimal places

return String(result);

C - code



Question:
Write a function that takes an array of integers as input, multiplies all 
of the integers together, divides the result by the number of entries 
in the array, and returns the result as a string with the value 
rounded to three decimal places.


*/

function multiplicativeAverage (arr) {
  let result = 1;

  for (let idx = 0; idx < arr.length; idx++) {
    result *= arr[idx];
  }

  let dividedResult = result / arr.length;
  let finalResult = String(dividedResult.toFixed(3));

  return finalResult;
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

/*
LS solution:

function multiplicativeAverage(numbers) {
  let product = 1;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    product *= numbers[idx];
  }

  return (product / numbers.length).toFixed(3);
}

LS is more elegant because they do not declare as many variables. Mine can be
confusing because of all the differen't 'result' variables and they are not necessary.
They both work the same though. my String call is also redundant because the method toFixed converts
to a string automatically.
*/

