/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: number

Output: number

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

function twice(number) {
  return typeof String(number);
}

D - What kind of data structures will you need to create or manipulate to create working function?


A - algorithm

First, high level:

split input number by number of digits
  do this by turning number into string and length divided by 2

if even number of digits AND first half of digits deeply equals second half of digits
assign it double number OR put in if/else stmt

if else stmt
  if double number
    return double number
    else
      return number times 2

C - code


Question:


*/

/* initial attempt - works somewhat but has bugs
function twice(number) {
  let stringedNum = String(number);
  let numberOfDigits = stringedNum.length / 1;
  let firstHalfString = stringedNum.slice(0, numberOfDigits);
  let secondHalfString = stringedNum.slice(numberOfDigits);

  if ((numberOfDigits % 2 === 0) && (firstHalfString === secondHalfString)) {
    return number;
  } else {
    return number * 2;
  }
}
*/
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

// I was outrageously close. My confusion was thinking Math.floor would lead to errors if we had odd digit amounts.

//LS solution

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}