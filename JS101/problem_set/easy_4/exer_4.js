/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 
Input: string

Output: boolean value

Explicit requirements: 

Implicit Requirements: 

Questions: 
What kind of loop might be good for this question (if any)?


E - do a test case to see if everything is working

D - What kind of data structures will you need to create or manipulate to create working function?


A - algorithm

First, high level:

Second, pseudocode:


C - code


Question:
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. 
A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

*/


function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

// I DID NOT LOOK UP ANY DOCUMENTATION. I JUST WAS LIKE "WHAT AM I SUPPOSED TO DO!?!?"
// TIME FOR A BREAK

//This was an example of how knowing your methods is essential. Less reading, more muscle memory.