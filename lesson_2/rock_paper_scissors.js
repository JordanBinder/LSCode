const readline = require(`readline-sync`);
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

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
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
             (choice === 'paper' && computerChoice === 'scissors') ||
             (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

while (true) {
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  } // edge case, they don't respond with rock, paper or scissors

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`you chose ${choice}, computer chose ${computerChoice}`);

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y'); {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
