const readline = require("readline-sync");

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const MATCH_COMPLETED = 3;

let WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]             // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) { // shows lines for TTT
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() { // initalizes the 1-9 squares available. Returns object with keys 1-9 and empty strings
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) { // returns array with all current board position options
  return Object.keys(board).filter(key => board[key] === ' ');
}

function joinOr(array, delimiter = ', ', word = 'or') { // used to make current positions available easier to read.
  if (array.length === 0) {
    return '';
  } else if (array.length === 1) {
    return `${array[0]}`;
  } else if (array.length === 2) {
    return `${array[0]} ${word} ${array[1]}`;
  } else if (array.length >= 3) {
    return array.slice(0, array.length - 1).join(delimiter) +
      `${delimiter}${word} ${array[array.length - 1]}`;
  } else {
    return '';
  }
}

function playerChoosesSquare(board) { // marks an X on the board
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function findAtRiskSquare(line, board, marker) { // returning null (falsy val) if no player threat. Otherwise, returning empty string (truthy val).
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerChoosesSquare(board) { // marks an O on the board
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board);
    if (square) break;
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}


function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return detectWinner(board);
}

// eslint-disable-next-line max-lines-per-function
function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [ sq1, sq2, sq3 ] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
        board[sq2] === HUMAN_MARKER &&
        board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
        board[sq2] === COMPUTER_MARKER &&
        board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

// function scoreCounter(board) {
//   let computerWinCounter = 0;
//   let playerWinCounter = 0;
//   if (detectWinner(board) === 'Player') {
//     playerWinCounter += 1;
//     return playerWinCounter;
//   } else {
//     computerWinCounter += 1;
//     return computerWinCounter;
//   }
// }
let score = {
  humanScore: 0,
  computerScore: 0
};

while (true) {

  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    let winner = detectWinner(board);
    if (winner === 'Player') score.humanScore += 1;
    if (winner === 'Computer') score.computerScore += 1;
    console.log(winner);
    prompt(`${detectWinner(board)} won!`);
    prompt(`the current score is:`);
    prompt(`Player: ${score.humanScore} Computer: ${score.computerScore}`);
    prompt(`You must get ${MATCH_COMPLETED} wins to officially win the match!`);
  } else {
    prompt("It's a tie!");
    prompt(`the current score is:`);
    prompt(`Player: ${score.humanScore} Computer: ${score.computerScore}`);
    prompt(`You must get ${MATCH_COMPLETED} wins to officially win the match!`);
  }

  if (score.humanScore >= MATCH_COMPLETED && score.computerScore >=
    MATCH_COMPLETED) {
    prompt(`Press any key to continue`);
    readline.question();
    // currentPlayer = firstMover;
  } else if (score.humanScore === MATCH_COMPLETED) prompt(`YOU WON the match!\n`);
  else prompt(`COMPUTER WON the match!\n`);
  // note: looked at fellow LS Student Dominic Parker for
  // understanding how to do this.
  // above if statement was his idea.


  prompt('Play again?');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');


/* Keeping score

We want to:

  display scores for player and comp after each game.
  have a global constant 5 to signify the end of a match
  once someone has reached 5, log that to the user and both
   counters for player and comp
    go back to 0.
*/