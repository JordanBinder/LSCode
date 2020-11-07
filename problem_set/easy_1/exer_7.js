// Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    console.log(string2 + string1 + string2);
  } else if (string2.length > string1.length) {
    console.log(string1 + string2 + string1);
  } else {
    console.log('The strings are equal in legnth, and therefore you do not deserve an answer');
  }
}






shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

/* LS solution:

function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}

*/

// I accounted for equal length. Not sure if I should have or not.