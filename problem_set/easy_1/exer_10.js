// Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// Examples:
let i = 1;
let array = [];
let result = 0;
let j = 0

function multisum (target) {
  for (i ; i <= target; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      array.push(i);
    }
  }  
  for (j ; j < array.length; j++) {
    result += array[j];
  }
  console.log(array);
  console.log(result);
}

// if number % 3 === 0 

// if number % 5 === 0


multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168




/* LS solution:

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}

*/

// not sure why mine gets so close but doesn't hit the mark. Correct numbers are pushed to array, but not summed.