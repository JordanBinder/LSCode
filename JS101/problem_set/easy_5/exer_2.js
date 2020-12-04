/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: 2 arrays

Output: 1 array with all the values except for duplicate values.

Explicit requirements:

Implicit Requirements: 

Questions: 
What kind of loop might be good for this question (if any)?
for loops to push each element out of each array

E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
empty array to push values into.

A - algorithm

First, high level:
declare empty array - resultArr

for loop over array1
  push to empty array

for loop over array2
  push to empty array

for loop over resultArr
  declare counter = 1
  While counter is less than or equal to resultArr
    if resultArr[idx] === resultArr[counter]
      splice resultArr[idx];
      else
        continue;
    counter++


return resultArr


Second, pseudocode:


C - code


Question:
Write a function that takes two arrays as arguments, and returns an array containing the union of the values from the two. There should be no duplication of values in the returned array, even if there are duplicates in the original arrays. You may assume that both arguments will always be arrays.

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

*/

/*
function union (arr1, arr2) {
  let resultArr = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    resultArr.push(arr1[idx]);
  }
  
  for (let idx = 0; idx < arr2.length; idx++) {
    resultArr.push(arr2[idx]);
  }  

  for (let idx = 0; idx < resultArr.length; idx++) {
    let counter = 1;
    while (counter <= resultArr.length) {
      if (resultArr[idx] === resultArr[counter]) {
        resultArr.splice(resultArr[idx], 0);
      } else {
        continue;
      }
      counter++;  
    }
  }




  return resultArr;
}

My code gets me where I want to be up until the last for loop. I believe my problem is nesting the while loop
in the for loop, but I don't know another way to evaluate the next value in the array with the value at the current
index.



After looking at LS, this was COMPLETLY due to the fact that I didn't know method indexOf. 
Knowing indexOf produces -1 for a value not already present, I can use this to identify unique values in my array.
Will put this in my toolkit.

function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (resultArray.indexOf(value) === -1) {
      resultArray.push(value);
    }
  });
}

function union(array1, array2) {
  let newArray = [];
  copyNonDupsTo(newArray, array1);
  copyNonDupsTo(newArray, array2);
  return newArray;
}
*/

union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]