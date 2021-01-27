/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: 3 nums

Output: string representing type of triangle

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?
switch case

Can this be made easier/more readable by breaking it up into more functions?
Yes I believe so

E - do a test case to see if everything is working

function isTriangle(side1, side2, side3) { // satisfy both conditions here.
  let sortedArr = [side1, side2, side3].sort((a, b) => a - b);

  return sortedArr;
}

console.log(isTriangle(3, 4, 5));        // "scalene" test checks out

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:

isTriangle: takes 3 sides
let sortedArr be [side1, side2, side3] sorted lowest to highest.

if sortedArr at 0 and 1 is greater than at 2 && all sides are > 0
  return true
    otherwise
      return false

triangle: takes 3 sides

if isTriangle is false
  return 'invalid'

switch(isTriangle()) { // don't forget break stmts
  case for equilaterial

  case for isosceles

  case for scalene

}

Second, pseudocode:


C - code


Question:

To be a valid triangle, the sum of the lengths of the two shortest
sides must be greater than the length of the longest side,

(I read this as sort an array of nums and make it pass that condition)

and every side must have a length greater than 0.

(make it pass this condition too)

If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a
triangle as arguments, and returns one of the following four strings
representing the triangle's classification:
'equilateral', 'isosceles', 'scalene', or 'invalid'.

Notes:

*/

function isTriangle(side1, side2, side3) { // satisfy both conditions here.
  let sortedArr = [side1, side2, side3].sort((a, b) => a - b);

  if ((sortedArr[0] + sortedArr[1]) > sortedArr[2]
    && sortedArr[0] > 0
    && sortedArr[1] > 0
    && sortedArr[2] > 0) {
    return true;
  } else {
    return false;
  }
}

function triangle(side1, side2, side3) { // returns type of triangle
  let sortedArr = [side1, side2, side3].sort((a, b) => a - b);

  if (isTriangle(side1, side2, side3) === false) {
    return 'invalid';
  } else if (sortedArr[0] === sortedArr[1]
    && sortedArr[1] === sortedArr[2]) {
    return 'equilateral';
  } else if (sortedArr[0] === sortedArr[1]
    || sortedArr[1] === sortedArr[2]
    || sortedArr[0] === sortedArr[2]) {
    return 'isoceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"

/* Postmortem:


  switch (isTriangle(side1, side2, side3)) {
    case 'equilateral':
      sortedArr[0] === sortedArr[1] && sortedArr[1] === sortedArr[2];
      break;
    case 'isoceles':

      break;
    case 'scalene':
      
      break;
  }

  Did everything on my own except the if/else conditions. I just had a brainfart
  and didn't know what to put there but it was quite ovbious. 

  I liked this problem. My code feels inelegant though. 

  I originally thought to use a switch stmt but my function
  didn't work with it. I am a bit confused about what goes into a switch
  statement as I thought a boolean condition would work but it didn't.

  Good job JB!
*/