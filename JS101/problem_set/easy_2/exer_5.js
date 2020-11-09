// Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

// Example

let rlSync = require('readline-sync');

let num1 = rlSync.question(`Enter the first number:\n`);

let num2 = rlSync.question(`Enter the second number:\n`);

console.log(`${num1} + ${num2} = ${Number(num1) + Number(num2)}`);
console.log(`${num1} - ${num2} = ${Number(num1) - Number(num2)}`);
console.log(`${num1} * ${num2} = ${Number(num1) * Number(num2)}`);
console.log(`${num1} / ${num2} = ${(Number(num1) / Number(num2)).toFixed(2)}`);
console.log(`${num1} % ${num2} = ${Number(num1) % Number(num2)}`);
console.log(`${num1} ** ${num2} = ${(Number(num1) ** Number(num2)).toFixed(2)}`);

// function operations (number1, number2) {
//   return Number(number1) + Number(number2)
// }

// console.log(operations(num1, num2));

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 141050039560662968926103

//LS uses Math.floor for division. Why>