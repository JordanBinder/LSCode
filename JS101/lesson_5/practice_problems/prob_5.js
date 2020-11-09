/* 
The purpose of these practice problems is to let you 
practice the specific concepts covered in the last three assignments. 
If any of the problems seem hard at first, take the time to break them down 
and remember to focus on the structure of the collection object, the return value of callbacks 
and methods and the side effects of any methods.
*/

/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 

Explicit requirements:
Compute and display the total age of the male members of the family.

Implicit Requirements:
output is a number, not an array or an object.

Questions: 
How do we access the age values?

E - do a test case to see if everything is working

D - How will code look?
Pseduocode:

declare new variable as empty array
push values at key age to empty array
sum numbers in array


C - code

*/

// Consider the following nested object: 
// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// let resultArray = [];

// function pushAge (obj) {
//   resultArray.push(obj[Object.values('age')]);
// };

// munsters.push(Object.values('age'))

// did not notice it was just males.
// needed to accumulate to a number, not push to an array and then sum

let memberDetails = Object.values(munsters);
let totalMaleAge = 0;

memberDetails.forEach(member => {
  if (member.gender === 'male') {
    totalMaleAge += member.age;
  }
});