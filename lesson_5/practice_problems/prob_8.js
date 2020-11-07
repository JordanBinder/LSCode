/* 
The purpose of these practice problems is to let you 
practice the specific concepts covered in the last three assignments. 
If any of the problems seem hard at first, take the time to break them down 
and remember to focus on the structure of the collection object, the return value of callbacks 
and methods and the side effects of any methods.
*/

/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

/*
P - 

Explicit requirements:
result should be all vowels from the strings in the arrays

Implicit Requirements:

Questions: should all the vowels be in one string? one array?

E - do a test case to see if everything is working

Object.values(obj).forEach(arr => {
  return arr.forEach(str => {
    console.log(str);
  });
});

D - How will code look?
Pseduocode:

method call Object.values to work with array of arrays
method call forEach
  param arr to work with arrays of strings
  method call forEach
    param word to work with strings
    method call forEach
      param char to work with individual characters
        introduce if statement
        if list of vowels as variable is in char - truthy
          log char

C - code

*/

// Using the forEach method, write some code to output all vowels from the strings in the arrays. Don't use a for or while loop.


let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(arr => {
  return arr.forEach(str => {
    str.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      };
    });
  });
});