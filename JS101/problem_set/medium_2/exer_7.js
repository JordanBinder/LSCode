/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code

Question:

Write a function that takes an array as an argument
and sorts that array using the bubble sort
algorithm described above. The sorting should be done "in-place" —
that is, the function should mutate the array. You may assume that
the array contains at least two elements.

Notes:

input is array

output is array sorted using bubble sort

D - 
we will want to pair two vars in an array in our loop

high level:

for loop - idx 0, idx <= length of array; increment by 1

Questions: What condition will make it stop?
result === array.sort((a, b) => a - b) ???
*/

function bubbleSort(array) {
  
  for (let idx = 0; idx <= array.length; idx++) {
    let pair = [array[idx], array[idx + 1]];
    if (array[idx] > array[idx + 1]) {
      array = [array[idx + 1], array[idx]];
    }
  }
}

function bubbleSort(array) {
  while (true) {
    let swapped = false;
    for (let idx = 1; idx < array.length; idx++) {
      if (array[idx - 1] <= array[idx]) continue;
      [array[idx - 1], array[idx]] = [array[idx], array[idx - 1]];
      swapped = true;
    }
    if (!swapped) break;
  }
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/* post mortem:

My two big issues were not thinking to use a while loop for the outer loop.
I was thinking I could find a condition that would stop the array. 
Comparing the final array to the sorted would work, but that would seem like defeating the purpose
of the bubble sort as an exercise.

*/