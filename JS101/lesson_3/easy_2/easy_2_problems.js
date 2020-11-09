// #1 - Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur."

advice.replace("important", "urgent");

//I am embarassed that I couldn't find .replace in MDN

/*
The Array.prototype.reverse method reverses the order of elements 
in an array, and Array.prototype.sort can rearrange the elements 
in a variety of ways, including descending. Both of these methods 
mutate the original array as shown below. Write two distinct ways 
of reversing the array without mutating the original array. 
Use reverse for the first solution, and sort for the second.

*/

let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();

console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(reversedArray); // should be [ 1, 2, 3, 4, 5 ]

let numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

MimeTypeArray.sort((num1, num2) => num2 - num1;

// # 3

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

let determineInclusion = numbers.includes(number1);

// # 4 show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";
let otherFamousWords = "Four score and ";

otherFamousWords + famousWords;

"Four score and ".concat(famousWords);

// # 5 - remove the 3 in the below array:

[1, 2, 3, 4, 5].splice(2, 1);

// # 6 - Create a new array that contains all of the above values, but in an un-nested format:


let oldArray = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

oldArray = [].concat(...oldArray);

/* # 7 - 
Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

Create an array from this object that contains only two elements: Barney's name and Barney's number:

[ 'Barney', 2 ]
*/

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

// so I believe here that Object.entries is acting similarly to a for loop, the filter is saying, keep only the key-value pair 
// that says "Barney," and then lastly the shift is getting rid of the outer array (why is there an outer array to begin with?)

// # 8 - 


let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(numbers);
Array.isArray(table);

// FINALLY SOMETHING I KNEW w/o MDN

// # 9 - Back in the stone age (before CSS), we used spaces to align things on the screen. 
// If we have a 40-character wide table of Flintstone family members, how can we center the following title above the table with spaces?

let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);

// still don't understand why you divide by 2. Everyhting else makes sense.

// # 10 - Write two one-line expressions to count the number of lower-case t characters in each of the following strings:


let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;

/*
console.log(statement1.search("t");

the reason the above didn't work is because the string.search fxn is for finding regular expressions. It is not meant to find word characters in a string.
*/ 