/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input: two dimensional array

Output: array

Explicit requirements:

Implicit Requirements:
Use repeat function with first position idx number as amt?

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:

create new empty array

forEach inner array
  forEach element in inner array
    push first element, repeated the # of times indicated in second idx position

  return resulting array
Second, pseudocode:


C - code


Question:
Write a function that takes a grocery list (a two-dimensional array)
with each element containing a fruit and a quantity, and returns a
one-dimensional array of fruits, in which each fruit
appears a number of times equal to its quantity.


*/

function buyFruit(twoDimArray) {
  let resultArr = [];

  twoDimArray.forEach(elem => {
    let fruit = elem[0];
    let numOfTimesRepeated = elem[1];
    for (let i = 1; i <= numOfTimesRepeated; i++) {
      resultArr.push(fruit);
    }
    // let repeatedChars = fruit.repeat(numOfTimesRepeated);
    // resultArr.push(repeatedChars);
  });
  return resultArr;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
