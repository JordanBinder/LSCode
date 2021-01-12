/*
P -Understand the Problem
E -Examples / Test cases
D -Data Structure
A -Algorithm
C -Code
*/

/*
P -
Input:

Output:

Explicit requirements:

Implicit Requirements:

Questions:
What kind of loop/iteration might be good for this question (if any)?


Can this be made easier/more readable by breaking it up into more functions?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create
working function?


A - algorithm

First, high level:

declare empty array for result

declare array with match RegEx - all alphanumeric characters
(this gets us array of all letters)

map regex array

Second, pseudocode:


C - code


Question:
Modify the function from the previous exercise so it ignores non-alphabetic
characters when determining whether it should uppercase or lowercase each
letter.
The non-alphabetic characters should still be included in the return value;
they just don't count when toggling the desired case.

*/

function staggeredCase(string) {
  let result = string.toLowerCase().split("");
  let boolean = true;
  let resultArray = result.map(el => {
    if ((el >= 'a') && (el <= 'z')) {
      if (boolean) {
        boolean = false;
        el.toUpperCase();
      } else {
        boolean = true;
        el.toLowerCase();
      }
    }
  });
  return resultArray.join("");
}

// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

//tracking the upper/lower state with a boolean was foreign to me. Now I get it
// and see how useful it is

console.log(staggeredCase("I Love Launch School!"));