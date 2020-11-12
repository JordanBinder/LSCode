/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: positive integer

Output: logged triangle

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?
While should work well 


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
I think none. WRONG.
var to account for empty spaces
var to account for stars


A - algorithm
log number - 1 spaces blank and at the number's space place a *
log number - 2 spaces blank and at the number's space and the one before it place a *
First, high level:

Second, pseudocode:
var empty string
var counter at 1

while number is less than or equal to the number of logged entries

new idea:
var spaces is 1 less than height
var stars is 1
While height is greater than zero
log empty string with repeating characters defined by spaces var and a * repeated by value of stars
decrement spaces var by 1 to help create space for triangle
increment stars by 1 to create triangle
decrease height by 1 to end the loop once it hights a negative integer

C - code


Question:
Write a function that takes a positive integer, n, as an argument, and logs a right triangle whose sides each have n stars. 
The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left 
of the triangle, and the other end at the upper-right.



*/



function triangle(height) {
  let spaces = height - 1;
  let stars = 1;
  while (height > 0) {
    console.log(`${" ".repeat(spaces)}${"*".repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}