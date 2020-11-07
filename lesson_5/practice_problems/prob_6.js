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

Implicit Requirements:

Questions: 

E - do a test case to see if everything is working

D - How will code look?
Pseduocode:


C - code

*/

//Given this previously seen family object, print the name, age, and gender of each family member:
// Each output line should follow this pattern:

// (Name) is a (age)-year-old (male or female).

let ageAndGender = Object.values(munsters);

// for (let members in munsters) {
//   console.log(`${members} is a ${ageAndGender['age']}-years-old ${ageAndGender['gender']}`);
// }

// This was my intial attempt

//LS:
Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

// having a better understanding of Object.entries would have helped me here.