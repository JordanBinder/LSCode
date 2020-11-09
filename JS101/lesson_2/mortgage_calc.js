const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNum(number) {
  return number.trim() === '' || Number(number) < 0 || Number.isNaN(Number(number));
}

prompt(`welcome to Mortgage Calculator!!!! So glad you're here!`)

while (true) {

  prompt(`-------------------`);

  prompt(`Please enter a loan amount:`);

  let amount = rlSync.question();
  while (invalidNum(amount)) {
    prompt(`please enter a valid number:`)
    amount = rlSync.question;
  }

  prompt(`What is your interest rate?:`);
  let interestRate = rlSync.question();
  // interest rate

  while (invalidNum(interestRate)) {
    prompt(`Please enter a valid interest rate:`);
    interestRate = rlSync.question();
  }
  //invalid interest rate

  prompt(`Please enter the duration of the mortgage (in years):`)

  let duration = rlSync.question();
  //duration
  while (invalidNum(duration)) {
    prompt(`Please enter a valid duration:`)
    duration = rlSync.question(); 
    //invalid duration
  }

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(duration) * 12;

  let monthlyPayment = Number(amount) *
  (monthlyInterestRate /
  (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));

  prompt(`Your monthly payment would be ${monthlyPayment.toFixed(2)}`);

  

}