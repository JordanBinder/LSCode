const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(MESSAGES['welcome']);


prompt(MESSAGES["firstNum"]);
let number1 = readline.question();

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (invalidNumber(number1)) {
  prompt(MESSAGES["invalid"]);
  number1 = readline.question();
}


prompt(MESSAGES["secondNum"]);
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(MESSAGES["invalid"]);
  number2 = readline.question();
}

prompt(MESSAGES["whichOp"]);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(MESSAGES["youMustChoose"]);
  operation = readline.question();
}

let output;

switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}


prompt(MESSAGES["result"] + output);

// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.