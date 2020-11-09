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
return array of objects that has sorted objects buy earliest to most recent publication date

Implicit Requirements:
return the same array

Questions: 

E - do a test case to see if everything is working

D - How will code look?
Pseduocode:

// initial pseudocode
declare var booksByYearPublished
method call map
outer callback execution
  params obj
take published value and turn into number with Number() fxn
sort that using sort method call
callback will be parameters (a, b) and return b - a aka earliest to smallest

// final pseduocode
method call sort on books
callback execution: 
  2 parameters a and b
    on key published, make coerce string into nunber
    a - b

C - code

*/
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

/*
How would you order the following array of objects based on the year of publication of each book, from the earliest to the latest?
*/

// an initial attempt:
// books.map(obj => {
//   return Object.keys(obj).sort((a, b) => Number(b.published) - Number(a.published));
// });

books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});

// ^^ this was exactly like LS answer. Good Job. What I thought was that I needed to iterate over the array to access the objects.
// This was not the case.