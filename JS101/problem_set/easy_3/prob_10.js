/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: number aka yeah

Output: string that begins with century number and ends with appropriate ending

Explicit requirements:

Implicit Requirements:

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?


A - algorithm

beginningYear= 01
endingYear = 100

if (year > beginningYear && year < endingYear) {
  return String(beginningYear);
} else {
  beginningYear += 1;
  endingYear += 100
}

if the century's last digit ends in 1 gets string st, 2 gets string nd, 3 rd, 4-9 & 0 gets th

Second, pseudocode:


C - code


Question:
Write a function that takes a year as input and returns the century. The return value should be a string that 
begins with the century number,
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

1st

2nd

3rd

4th
5th
6th
7th
8th
9th
10th
11th
12th
13th
14th
15th
16th
17th
18th
19th
20th

21st

22nd

23rd

24th
25th
and so on
*/

/* first attempt
let beginningYear= 1;
let endingYear = 100;
let centuryNum = 1;

function century (year) {
  String(year);
if ((year > beginningYear) && (year < endingYear)) {
  return String(centuryNum);
  } else {
    beginningYear += 100;
    endingYear += 100;
    centuryNum += 1;
    return String(centuryNum);
  }
}
*/

/* second attempt
let beginningYear = 1;
let endingYear = 100;

function century (year) {
  let yearAsString = String(year);
  for (let centNum = 1; endingYear < year; centNum++) {
    if (year >= beginningYear && year <= endingYear) {
      return String(centNum);
    } else {
        beginningYear += 100;
        endingYear += 100;
    }
  }
}
*/

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"


LS solution

function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

/*
function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}

I made this problem waaaaay harder than it should have been. I thought bounding the year would be the way to go to define the century
The big takeaway is - KEEP THINKING ABOUT MATH.FLOOR. It is super powerful and will get you to stop thinking about the floating point
and what should be done with this floating point number.

*/