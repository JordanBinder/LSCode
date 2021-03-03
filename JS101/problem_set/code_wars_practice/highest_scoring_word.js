/*

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

P 
input string
output highest scoring word as a string
E
D - object
A - algorithm
C - code

fxn declared

  declare count function
  split string
  map array by letter
    
    return count


*/

function high(x){
  const AlphObj = {“a”: 1, “b”: 2, “c”: 3, “d”: 4, “e”: 5, “f”: 6, “g”: 7, “h”: 8,
                  “i”: 9, “j”: 10, “k”: 11, “l”: 12, “m”: 13, “n”: 14, “o”: 15,
                  “p”: 16, “q”: 17, “r”: 18, “s”: 19, “t”: 20, “u”: 21, “v”: 22,
                  “w”: 23, “x”: 24, “y”: 25, “z”: 26};
  let words = {};
  let array = x.split(” “);
  array.forEach(word => {
    let totalValue = 0;
    word.split(“”).forEach(char => {
      totalValue += AlphObj[char];
    });
    words[word] = totalValue;
  })
  let currentWord = array[0];
  for (word in words) {
    if (words[word] > words[currentWord]) currentWord = word;
  }
  return currentWord;
}

console.log(highestScore('You smell really bad bro'));