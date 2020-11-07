// In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.

// Examples:

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
  // edge case - if year modulo 4 === 0 && year modulo 100 === 0
    // return false

  // edge case - if year modulo 100 === 0 && year modulo 400 === 0
    // return true

  // edge case - if year modulo 4 === 0 
    // return true
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

/*
this was my first attempt

  if (year % 4 === 0 && year % 100 === 0) {
    return false;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else if (year % 4 === 0) {
    return true;
  }

*/ 

// this attempt did not account for non-leap years. It also does not follow a logical order. 