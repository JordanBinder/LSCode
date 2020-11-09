// Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

let readlineSync = require('readline-sync');

let roomLength = readlineSync.question('What is the length of the room in square meters? ');

let roomWidth = readlineSync.question('What is the width of the room in square meters? ');

let areaSqmt = roomLength * roomWidth;

let areaSqft = areaSqmt * 10.7639;

console.log(areaSqmt);

console.log(areaSqft);


/* LS solution:

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width).toFixed(2);

let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET).toFixed(2);

console.log(
  `The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`
);

/*

// looking at LS, I learned that the user input has nothing to do with the string logged before it. That is just to prompt the user to enter the correct info. 
// which is better, .prompt or .question ? 