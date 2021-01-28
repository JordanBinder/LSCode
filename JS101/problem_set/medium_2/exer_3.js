/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*

Question:

Notes:
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees,
and every angle must be greater than 0. If either of these conditions is not
satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments,
and returns one of the following four strings representing the triangle's
classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values,
so you do not have to worry about floating point errors.
You may also assume that the arguments are in degrees.
*/

function isTriangle(side1, side2, side3) { // satisfy both conditions here.
  let sortedArr = [side1, side2, side3].sort((a, b) => a - b);

  if (sortedArr[0] > 0
    && sortedArr[1] > 0
    && sortedArr[2] > 0
    && sortedArr[0] + sortedArr[1] + sortedArr[2] === 180) {
    return true;
  } else {
    return false;
  }
}

function triangle(side1, side2, side3) { // returns type of triangle
  let sortedArr = [side1, side2, side3].sort((a, b) => a - b);

  if (isTriangle(side1, side2, side3) === false) {
    return 'invalid';
  } else if (sortedArr[2] === 90) {
    return 'Right';
  } else if (sortedArr[0] < 90
    && sortedArr[1] < 90
    && sortedArr[2] < 90) {
    return 'Acute';
  } else {
    return 'Obtuse';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
/* Postmortem:

I did this problem correctly and without looking at LS!
It was very similar to exer_2.js. I just needed to adjust
the expression in isTriangle and modify the expressions and return strings
for triangle().

*/