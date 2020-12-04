/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: floating point number.

Output: string showing degree, minutes, and seconds

Explicit requirements: coercing numbers into a string. Probably with an object literal `${}`

Implicit Requirements: 

Questions: 
What kind of loop might be good for this question (if any)?
No loops, but math will be needed

Should we account for an input not between 0-360?

E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?
Values to represent degree, minutes, and seconds.

A - algorithm

First, high level:
declare degree var that is anything to the left of the floating point num
declare minutes which takes floating point and converts it to a value that reps mins
declare seconds which takes minutes and converts it further to rep seconds

return a string that reads `${}°${}'${}"`

Second, pseudocode:


C - code


Question:
Write a function that takes a floating point number representing an angle between 0 and 360 degrees, 
and returns a string representing that angle in degrees, minutes, and seconds. You should use a 
degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a 
double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.


*/

function dms (angle) {
  let floatingPoint = (angle % 1).toFixed(2);
  let angleToTimeRatio = 1.666667
  let degree = Math.floor(angle);
  let minute = ((floatingPoint / angleToTimeRatio) * 100).toFixed();// the ratio of 100 (floating point) and 60 (mins in an hr) is 1.6667:1.
  let second = ((minute / 60) * 100).toFixed();

  return `${degree}°${minute}'${second}"`;
}
dms(254.6);        // 254°35'59"

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

/* my answer does not work for second, because it can go above 60. Not sure how to fix this with my implementation.
The answer is in doing it LS's way. They 
I am roughly 1 minute off on each test case.

LS Solution:

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
                                       padZeroes(seconds) + '"';
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

LS is more precise because of line 84. They remove the integer part of the fp num by subtracting it from degreesInt.