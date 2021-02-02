/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: integer

Output: next featured number higher than input integer

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:
edge case - if input is greater than 9876543201
  return "There is no possible number that fulfills those requirements."

let variable incrementer contain input

for loop with index being input, up to 9876543201, incrementing by 1
  let var be to turn incrementer to string
  for loop over string
    if

  if incrementer is odd
  && divisible by 7
  && incrementer doesn't have repeating digits
    return incrementer

Second, pseudocode:


C - code


Question:
Write a function that takes an integer as an argument, and returns
the next featured number greater than the integer.
Issue an error message if there is no next featured number.

Notes:
To be a featured num, needs to meet these 3 conditions:

odd number
a multiple of 7,
all of its digits occuring exactly once each.

edge case is if the input integer is greater than 9876543201.
*/

function featured(input) {
  if (input > 9876543201) {
    return "There is no possible number that fulfills those requirements.";
  }
  let result = [];

  for (input; input < 9876543201; input++) {
    if (isOdd(input) && isMultipleOf7(input) && hasNonRepeatingDigits(input)) {
      result.push(input);
      break;
    }
  }
  return result[0];
}

function isOdd(featuredNum) {
  return (featuredNum % 2 === 1);
}

function isMultipleOf7(featuredNum) {
  return (featuredNum % 7 === 0);
}

function hasNonRepeatingDigits(featuredNum) {
  let stringedNum = String(featuredNum);
  let result;

  for (let i = 0; i < featuredNum.length; i++) {
    for (let j = 0; j < featuredNum.length; j++) {
      if (stringedNum[i] === stringedNum[j]) {
        result = false;
      } else {
        result = true;
      }
    }
  }
  return result;
}

console.log(featured(12));           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
/* Postmortem:
Commited one cardinal sin while doing this problem:
rushed into coding without laying out the high level perfectly.

If you don't have the high level as a blueprint, it's very unlikely you will
get the code right. Don't forget that. Have everything mapped out before coding.

Then code and make corrections as needed.

LS Solution:


function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum < MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}

I see here why their allUnique makes more sense.
Storing the seen numbers in the object allows us to detect when we find another.
I'm not 100% sure if my nested array works.

I see why Do While loops make sense here, as we want it to run and then check.


*/

/*
high level LS solution:

featured:

toOddMultiplesOf7:

allUnique:
create empty object
create var that turns num into string and then splits string into array of stringed digits

for loop with idx 0, idx less than length of number, increment by 1
  assign digit to key with boolean true as value

  if key exists already
    return false;



*/