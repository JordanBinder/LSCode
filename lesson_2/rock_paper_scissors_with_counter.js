const readline = require(`readline-sync`);
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

let computerCounter = 0;// make computer counter
let playerCounter = 0;// make player counter

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Wuddup lil mama!?!? Choose one: ${VALID_CHOICES.join(', ')}`);
let choice = readline.question(); // ask for input

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
    playerCounter += 1;
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
    computerCounter += 1;
  } else {
    prompt("It's a tie!");
  }
}

// Best of 5 Keep score of the player's and computer's wins. When either the player or computer reaches five wins, the match is over, 
// and the winning player becomes the grand winner. Don't add your incrementing logic to displayResults. 
// Keep your functions simple; they should perform one logical task — no more, no less.

// make outer loop (while counter < 5);

while (computerCounter < 5 && playerCounter < 5) {
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  } // edge case, they don't respond with rock, paper or scissors

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`you chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt(`You've won ${playerCounter} times. The computer has bested you ${computerCounter} times. You must fight again!`);
  // prompt('Do you want to play again (y/n)?');
  // let answer = readline.question().toLowerCase();
  // while (answer[0] !== 'n' && answer[0] !== 'y'); {
  //   prompt('Please enter "y" or "n".');
  //   answer = readline.question().toLowerCase();
  // }

}

if (computerCounter >= 5) {
  prompt(`looks like you've lost this time :(`);
  break;
} else {
  prompt(`looks like you've won this time!!!`);
  break;
}