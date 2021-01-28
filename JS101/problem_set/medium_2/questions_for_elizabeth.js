/*
Blog

There are 20 questions on the written. If I take 25-30 mins per medium question
Does that mean i'm not ready? How fast should I be able to get these practice Q's?
Answer: 20 mins is a good barometer for fluency and ready to take exam

template

Spread operator in 21, how does it work?

function popTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

while (true) {
  prompt('Welcome to Twenty-One!');

  // declare and initialize vars
  let deck = initalizeDeck();
  let playerCards = [];
  let dealerCards = [];

  // initial deal
  playerCards.push(...popTwoFromDeck(deck)); // Why use spread operator?
  dealerCards.push(...popTwoFromDeck(deck));


///

Procedural fibonacci question, is what I did procedural? Why don't I get 1 for the first 2 fib #'s?

Procedural or recursive or memotization important for written?

Notes:

Written and interview (other assessments only have 1 or the other, others have a project too)

Written:
3 hrs, 20 questions
tip: very unlikey you'll have time to go back. If you feel iffy about a few questions,
write Q down.

identifying some kind of underlying concept:
example. Variable shadowing, varibale scoping, obj's are immutable, these are the
types of fundamental principles you'll encounter and need to explain in relation to the code.

Be able to identify these concepts in code.

Clear and concise describing of code
ex. being very specific about:
return values
what is logged to the console.
Built in array methods and describing these really well is important *** really important
  The mechanics of how they work
If a new obj is being returned or if an obj is being mutated *** really important

///

Interview: Really about JS fluency and problem solving skills under pressure
PEDAC

interviewer will be mostly quiet

2 problems to solve. 1 at a time.
Up to an hour in total for both Q's.

communicate with your interviewer throughout

Want to see whole prob solving approach?

tip: practice live coding with other students
Record yourself if possible.
Quicktime allows recording screen and audio. Use it to practice.

Verbalize 

Manipulating for loops are important
Do I need nested for loops?
DO I need to stop my for loop before the end of the array?

using each type of map/filter/forEach call
forEach can't break out early vs. for loops you can

working with strings

forEach
map
filter some of the most important

Don't get worked up because you ran into bugs or a logical error.

good prob solving approach and fluency of JS



Questions we did together:

What is truthy and falsy?
> Boolean('hello');
true
> Boolean(null);
false
> 

truthy -- evalutes as true in a boolean context
falsy -- evalutes as false in a boolean context

falsy values:
0, -0
NaN
null
undefined
false
empty string BUT an empty array is truthy. Don't confuse.

truthy: everything else

/*
Data Types:
Primitives
  - strings
  - number
  - boolean
  - undefined
  - null
  
Objects (arrays are objects)
*/

> Boolean('hello');
true
> Boolean(null);
false
> let str = 'string';
undefined
> typeof str;
'string'
> let arr = ['hello'];
undefined
> typeof arr;
'object'
> 

*/


let animal = "dog";

const speak = animal => {
  if (animal === undefined) {
    console.log("Bark");
  } else {
    console.log("Meow");
  }
}

speak(); // undefined

/*
invoking this function logs Bark.
not passing an arg into a function returns undefined

variable shadowing occurs here on line 150. creates inner scope.
can't see variable animal because of the function parameter called animal


// if we have func parameters with no argument passed in, they will have a val of undefined
// variable shadowing- we can't access the global var animal

function expression is what we see on line 150

function declaration / definition:
function foo() {

}

biggest difference between the two is that if we create a fxn expression, you cannot invoke it before
the fxn expression

if we remove animal param, the const can reach the 



Ending notes:

language requirements for written assessment.
/*
// built- in array methods
// forEach
  - iteration
  - returns undefined
  - arg: callback function
  - return value of callback is used how? forEach IGNORES it

// filter
  - selection
  - new array 
  - arg: callback function
  - return value of callback is used how? 
    - evalutes the truthiness of the callback's return value
    - if the return val is truthy, the original element of the calling array
    - will be placed in the new returned array


// map
  - transformation
  - new array  
  - arg: callback function
  - return value of callback is used how? 
    - takes the return value of the callback on each iteration, and places it into the new returned arr
  
*/

/*