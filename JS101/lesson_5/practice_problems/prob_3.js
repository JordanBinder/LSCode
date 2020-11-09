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

Questions: 

E - do a test case to see if everything is working

D - How will code look?
Pseduocode:


C - code

*/

//For each of these collection objects, demonstrate how you would access the letter g.

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
arr1[2][1][3];
// // 3 layers to get to g
// arr1.map(outerArray => {
//   return outerArray.map(middleArray => {
//     return middleArray.map(innerArray => {
//       return innerArray[3];
//     });
//   });
// });
// Why do I keep thinking I have to iterate??????????

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
arr2[1]['third'][0];

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
arr3[2]['third'][0][0];

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
obj1['b'][1];

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
Object.keys(obj2.third)[0];