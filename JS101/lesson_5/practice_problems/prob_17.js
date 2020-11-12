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

Implicit Requirements:
create a 0-9 digits variable
create a letters a-f variable (what type? Primitive string? array of strings?)

Questions: 
Should the digits and letters be together in an array? I think so.

E - do a test case to see if everything is working

D - How will code look?
Pseduocode:

create var with all available letters and digits
create empty string
push from array of possible digits into empty string
if function
  if 9th character isn't -
    9th character is now -
  repeat for all section breaks
turn into string
insert -'s at each section break in string
C - code

*/

/*
A UUID is a type of identifier often used to uniquely identify items, even when some of those items were 
created on a different server or by a different application. That is, without any synchronization, 
two or more computer systems can create new items and label them with a UUID with no significant 
risk of stepping on each other's toes. It accomplishes this feat through massive randomization. 
The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. 
The chance of a conflict is vanishingly small with such a large number of possible values.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. 
The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Write a function that takes no parameters and returns a UUID.
*/

// My pseduocode did not have a good way to account for the difference in section length. 
// The sections array did this super well.

function generateUUID() {
  let characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';
  sections.forEach((section, sectionIndex) => {
    for (let index = 1; index <= section; index++) {
      let randomIndex = Math.floor(Math.random() * characters.length);
      uuid += characters[randomIndex];
    }

    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    }
  });

  return uuid;
}

generateUUID(); // => '02e51c2f-dacd-c319-53b5-e40e6e8c1f78'
generateUUID(); // => '39038ab9-3b95-43d8-6959-5d785ccb9b69'
generateUUID(); // => 'f7d56480-c5b2-8d4d-465f-01a4ea605729'

/*
pseudocode for correct way to do prob:

declare characters array with all possible digits and letters
declare sections array with each element being number of elements in each section

declare empty string uuid

method call forEach on sections array: params section and sectionIndex
  for loop with index at 1
    declare var random index equal to random number between 0 and 1 times length of characters array
    (don't forget Math.floor to avoid floating point numbers)
    push character at newly aquired random index to empty string uuid
  Need help with understanding if stmt here

  return uuid