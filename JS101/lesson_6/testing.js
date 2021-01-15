const PLAYER_HAND = [];
const DEALER_HAND = [];
const SUIT = ['H', 'D', 'S', 'C'];
const CARD_NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const READLINE = require('readline-sync');

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

console.log(initializeDeck());