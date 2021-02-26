/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2.
In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy 
the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy
their positions in the alphabet for each word. 

declare const which is alphabet array of letters

declare result arr

seperate into individual strings forEach
  for loop over string
    declare var counter
    if index at element (lowercased) deeply equals the index at const alphabet
    counter += 1;

  counter.push to result arr
  counter = 0;

return result arr
*/

function solve (array) {
  const ALPHABET = ['a' , 'b', 'c' , 'd', 'e' , 'f', 'g' , 'h', 'i' , 'j', 'k' , 'l', 'm' , 'n', 'o' , 'p',
    'q' , 'r', 's' , 't', 'u' , 'v', 'w' , 'x', 'y' , 'z'];
  let resultArr = [];

  array.forEach(str => {
    let counter = 0;
    for (let idx = 0; idx < str.length; idx++) {
      if (str[idx].toLowerCase() === ALPHABET[idx]) {
        counter += 1;
      }
    } resultArr.push(counter);
  });

  return resultArr;
}

console.log(solve(["abode","ABc","xyzD"])); // [4, 3, 1]
