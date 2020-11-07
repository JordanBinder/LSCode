// Practice Problem 1 - What is the return value of the filter method call below? Why?
[1, 2, 3].filter(num => 'hi');

// guess - ['hi', 'hi', 'hi']

// Answer - [ 1, 2, 3 ]
// filter performs selection based on the truthiness of the callback's return value. In this case, the return value is always 'hi',
// which is truthy. Therefore filter will return a new array containing all of the elements in the original array.

// What we learned here is that nothing was saying it would translate our elements. Because the value 'hi' is truthy, it satisfied
// the criteria and gave us all our elements back in a new array after filtering.

////////////////////////

// Practice Problem 2 - What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});

// guess - [1, 2, 3] because no return value is explicitly stated with the {} type brackets

// Answer - [ undefined, undefined, undefined ]

// My thinking was correct, but now I know the outcome is undefined when mapping without an explicit return value

/////////////////////////

// Practice Problem 3 - what does it output?
[1, 2, 3].map(num => num * num);

// guess - [1, 4, 9]
// I was correct! Without braces surrounding the body of the arrow function, JavaScript uses the computed value as the return value.

////////////////////////

// Practice Problem 4 - What is return value and why?
['ant', 'bear', 'caterpillar'].pop().length

// my guess was 2 but it's wrong.

// correct - 11. My error was thinking that pop returns the resulting array but it actually returns the popped element.


///////////////////

// Problem 5 - What is the callback's return value in the following code? Also, what is the return value of every in this code?
[1, 2, 3].every(num => {
  return num = num * 2;
});

// answer -  2
// 4
// 6
// true

// This all made sense

///////////////////////////////////////////////////////////////////////////////////////////////////

// Problem 6 - How does Array.prototype.fill work? Is it destructive? How can we find out?
let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

// it is destructive because MDN says so haha. We can also test for this. .fill takes a value and fills it with every element and then returns the original array

///////////////////////////////////////////////////////////////////////////////////////////////////

// Problem 7 - what is return value?
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// guess - ['bear']
// answer- [ undefined, 'bear' ] - When a function doesn't explicitly return something, it implicitly returns undefined. 
// That's why we see undefined as the first element of the returned array.
// when 'ant' aka elem evaluated to false, it didn't have instructions to get rid of it. So it mapped it's outcome of the evaluation.

///////////////////////////////////////////////////////////////////////////////////////////////////

// Problem 8 - Write a program that uses this array to create an object where the names are the keys 
// and the values are the positions in the array:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

let flintstonesObj = {};

flintstones.forEach((name, index) => {
  flintstonesObj[name] = index;
});

flintstonesObj; // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

///////////////////////////////////////////////////////////////////////////////////////////////////

// Problem 9 - Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let ageValues = Object.values(ages);
let totalAges = 0;

ageValues.forEach(value => {
  totalAges += value;
});

// We did this one correctly! LS did it on one line by not making ageValues its own thing. Both work.
/*
let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);
totalAges; // => 6174
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Problem 10 - Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let arrayofAges = Object.values(ages);
let smallestNum;

arrayofAges.forEach((age, index) => {
  if (age[index] < age[index + 1]) {
    age[index] = smallestNum;
  }
});
// ^^^ this did not work. I think the logic is sound but forEach is wrong way to iterate this.
// I think we still want an array of values so we'll use Object.values()
// from there we will loop over array of ages
// if ages[index] is less than ages at i
  // break

///////////////////////////////////////////////////////////////////////////////////////////////////

// Problem 11 - Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
});