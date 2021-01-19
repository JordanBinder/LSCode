/*

1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay (checking each hit if >= 17) (if immediate stay,
    check on stay from user)
4. If player bust, dealer wins. (end of game)
5. Dealer turn: hit or stay (checking each hit if >= 17) (if >=17 and <= 21, end loop)
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.

*/

/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*

P -
Input:

Output:

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:


Second, pseudocode:


C - code


Question:

hearts
diamonds
spades
clubs

1-10
Jack
Queen
King
Ace
*/


const SUIT = ['H', 'D', 'S', 'C'];
const CARD_NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const READLINE = require('readline-sync');
const INITIAL_HAND_SIZE = 2;

function prompt(message) {
  console.log(`=> ${message}`);
}

function initializeDeck() {
  let deck = [];

  for (let idx = 0; idx < SUIT.length; idx++) {
    let suits = SUIT[idx];

    for (let idx = 0; idx < CARD_NUMBER.length; idx++) {
      let cardValues = CARD_NUMBER[idx];
      deck.push([suits, cardValues]);
    }
  }
  return shuffleCards(deck);
}

function shuffleCards(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
  return array;
}

function dealPlayer(deck) { //pushes two cards to const PLAYER_HAND and returns const
  for (let idx = 0; idx <= INITIAL_HAND_SIZE; idx++) {
    PLAYER_HAND.push(deck[idx]);
  }
  return PLAYER_HAND;
}

function dealDealer(deck) { //pushes two cards to const PLAYER_HAND and returns const
  for (let idx = 0; idx <= INITIAL_HAND_SIZE; idx++) {
    DEALER_HAND.push(deck[idx]);
  }
  return DEALER_HAND;
}

function playerTurn() {


/*
Player needs to:

player needs to be given 2 cards
be shown his hand (no risk of bust yet)
dealer needs to be given 2 cards
be shown dealer's first drawn card
be 
be asked to hit or stay
if hit:
  add another card to player hand
if stay:
  ___

*/
}


function dealerTurn() {

}

function checkIfBust() { // to be used inside playerTurn and dealerTurn.

}

function displayResult() {

}

while (true) {
  prompt('Welcome to Twenty-One!');
  // initialize vars and deck
  let playerHand = [];
  let dealerHand = [];
  let deck = initializeDeck(); // this gives us a shuffled deck

  // deal cards

  // player turn
  playerTurn();
  // dealer turn
  dealerTurn();
  // show result
  displayResult();
  // ask and receieve input to play again
  prompt(`Play again?`);
}

/*
This is what I got before turning to LS Solution.

Lessons learned:

player and dealer hand should be local variables.
That way they can be reset upon "play again" "y"

One function to create "strings" and another with a switch stmt
is a great way to show certain outcomes of the game
aka "dealer busting"
aka "player busting"
aka "tie"


*/