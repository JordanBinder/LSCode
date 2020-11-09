// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.
// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.


let readlineSync = require('readline-sync');

let integer = readlineSync.question("Please enter an integer greater than 0: ");
integer = Math.abs(integer);

let computeOrNot = readlineSync.question("Enter 's' to compute the sum, or 'p' to compute the product.");

let counter = 1;

let sum = 0;

let product = 1;

if (computeOrNot === "s") {
  while (counter <= integer) {
    sum = sum + counter;
    counter++;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
}

if (computeOrNot === "p") {
  while (counter <= integer) {
    product = product * counter;
    counter++;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${product}.`);
}

/* LS solution:

function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}

let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}

*/

// below I tried my file but changed it to LS's if-else if-else syntax. It still works. Good to see and think through both options

// Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.


/*
let readlineSync = require('readline-sync');

let integer = readlineSync.question("Please enter an integer greater than 0: ");
integer = Math.abs(integer);

let computeOrNot = readlineSync.question("Enter 's' to compute the sum, or 'p' to compute the product. ");

let counter = 1;

let sum = 0;

let product = 1;

if (computeOrNot === "s") {
  while (counter <= integer) {
    sum = sum + counter;
    counter++;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else if (computeOrNot === "p") {
  while (counter <= integer) {
    product = product * counter;
    counter++;
  }
  console.log(`The sum of the integers between 1 and ${integer} is ${product}.`);
} else {
  console.log ('The droids you are looking for are not here.');
}
*/
