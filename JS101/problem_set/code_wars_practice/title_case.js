/* eslint-disable max-lines-per-function */
/*
input: string and exception list array

output: string

edge case: first word must be capitalized


A:
title's first word must be capitalized

loop over title
  if word at title isn't on exception list
    capitalize first character of word

split

pseudocode

split string into array of words

edge case: if empty string as argument, return empty string

declare var with map method on array of words w/ callback:
  if (!lowercaseMinorWords.includes(word))
    then return word[0].toUpperCase();
    else
      continue


return new array with first element's first char uppercased

*/

function titleCase(title, minorWords) {
  if (title === '') {
    return '';
  }

  let lowercaseTitle = title.toLowerCase().split(" ");
  let lowercaseMinorWords = minorWords.toLowerCase().split(" ");

  let mappedArr = lowercaseTitle.map(word => {

    if (!lowercaseMinorWords.includes(word)) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });

  mappedArr.forEach(word => {
    if (mappedArr[0]) {
      word[0] = word[0].toUpperCase + word.slice(1);
    }
  });

  return mappedArr.join(" ");
}


// console.log((titleCase('a clash of KINGS', 'a an the of'))); // , 'A Clash of Kings')
// console.log((titleCase('THE WIND IN THE WILLOWS', 'The In'))); // , 'The Wind in the Willows')
// console.log((titleCase('the quick brown fox'))); // , 'The Quick Brown Fox')

/* Dominic Implementation

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
function titleCase(title, minorWords) {
  if (title === '') return '';

  let titleArr = title.toLowerCase().split(" ");

  titleArr[0] = capitalize(titleArr[0]);

  if (minorWords) minorWords = minorWords.toLowerCase().split(" ");

  for (let i = 1; i < titleArr.length; i += 1) {
    if (!minorWords || !minorWords.includes(titleArr[i])) {
      titleArr[i] = capitalize(titleArr[i]);
    }
  }
  return titleArr.join(" ");
}

console.log(titleCase('a clash of KINGS', 'a an the of')); // 'A Clash of Kings'

*/