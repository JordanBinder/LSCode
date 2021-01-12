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

use transactionsFor to obtain array of objects with correct id

using result of transactionsFor:

grab values 'in' or 'out'
for loop
declare sum
  if in
    increment 1
    else
      decrement 1

function:
if positive > 0 return true
  else false;

Second, pseudocode:


C - code


Question:
Building on the previous exercise, write a function that returns
true or false based on whether or not an inventory item is available.
As before, the function takes two arguments: an inventory item and
a list of transactions.
The function should return true only if the sum of the quantity values of
the item's transactions is greater than zero. Notice that there is
a movement property in each transaction object.
A movement value of 'out' will decrease the item's quantity.

U may (and should) use the transactionsFor function from the previous exercise.

*/

function isItemAvailable(inventoryItem, transactions) {
  let array = transactionsFor(inventoryItem, transactions);

  let result = array.reduce((sum, saleOrPurchase) => {
    if (saleOrPurchase.movement === 'in') {
      return sum + saleOrPurchase.quantity;
    } else {
      return sum - saleOrPurchase.quantity;
    }
  }, 0);

  return result > 0;
}

function transactionsFor(inventoryItem, transactions) {
  let result = transactions.filter(objects => {
    return objects.id === inventoryItem;
  });
  return result;
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true

// It would be helpful if someone could explain why saleOrPurchase
// works in this case. How is it accessing the object I need?
// Maybe i'm just getting hung up on the name
// and need to realize it's just referring to the index of the array