/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: Integer (positive or negative)

Output: String showing time of day based on input

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
Hour variable
Minute variable

function to log output to console.

A - algorithm

First, high level:
Declare Hour = 0
Declare Minute = 0
Declare j

While let j !== 0
  j equals input number
  if j is greater than 60
    Hour incremented by 1
    j -= 60
    else
      minute is incremented by j
      j = 0;

  if hour > 24
    hour = hour remainder 24;

  


While input num is less than 60
  add num to minute var

  While

Second, pseudocode:


C - code


Question:

The time of day can be represented as the number of minutes before or after midnight. 
If the number of minutes is positive, the time is after midnight. 
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm). 
Your method should work with any integer input.

You may not use javascript's Date class methods.

The tests below should log true.

Disregard Daylight Savings and Standard Time and other complications.

*/

/*
function timeOfDay(num) {
  let hour = 0;
  let minute = 0;
  let j;

  while (j < num) {
    j = 0;

    if (j < 60) {
      minute += j;
      j += ;
    } else {
      hour += 1;
      j += 60;
    }
  }

  return `${hour}:${minute}`
}

console.log(timeOfDay(65));

*/

// my best attempt before looking at LS solution. This works for positive integer's only.
/*
function timeOfDay(num) {
  let hr = 0;
  let min = 0;
  let j;

  min = num % 60;
  hr = Math.floor(num / 60);

  while (hr > 24) {
    hr -= 24;
  }

function formatDate(hr, min) {
  hr.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
  min.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

  console.log(`${hr}:${min}`)
}

  formatDate(hr, min);
}
*/

// my solution is actually not bad. Only real problem is not accounging for negative integers.

// LS Solution

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

console.log(timeOfDay(0));// "00:00");
console.log(timeOfDay(-3));// "23:57");
console.log(timeOfDay(35));// "00:35");
console.log(timeOfDay(-1437));// "00:03");
console.log(timeOfDay(3000));// "02:00");
console.log(timeOfDay(800));// "13:20");
console.log(timeOfDay(-4231));// "01:29");