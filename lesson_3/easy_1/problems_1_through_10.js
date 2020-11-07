// #1 - Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;

// Will return undefined. Any reference to a part of array outside of scope returns undefined



// #2 - How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

str1.endsWith("!"); // true
str2.endsWith("!"); // false

// Was not aware of this method. Now I am :)

// #3 - Determine whether the following object of people and their age contains an entry for 'Spot':

ages.hasOwnProperty("Spot");

//This is the method we would use to determine if the key 'spot' can be found in the key-value pair obj

// #4 - Using the following string, create a new string that contains all lowercase letters except 
// for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

/*

original attempt:

munstersDescription.toLowerCase();
munstersDescription.charAt(0).toUpperCase;

LS is better because it works haha.
*/

// #5 - What will the following code output?

console.log(false == '0'); // true
console.log(false === '0'); // false

// What was coercied, the boolean or the string?
// I believe it goes left to right

// #6 - We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
// Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

let allAges = ages.assign(ages, additionalAges);

// #7 - Determine whether the name Dino appears in the strings below -- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function checkForWord (string) {
  console.log(string.includes('Dino'));
}

console.log(checkForWord(str1));
console.log(checkForWord(str2));

// #8 - How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');

// #9 - How can we add multiple items to our array? ('Dino' and 'Hoppy')

flintstones.push("Dino", "Hoppy"); // add as many arguments to it as you'd like.

/*
Return a new version of this sentence that ends just before the word house. 
Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

*/

let advice = "Few things in life are as important as house training your pet dinosaur.";
advice.slice(0, 39);

// LS answer: advice.slice(0, advice.indexOf('house'));
//They used indexOf so as not to have to count characters. Index of finds the first charactrer in the word within a string.