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


*/

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

console.log(dealPlayer(deck));