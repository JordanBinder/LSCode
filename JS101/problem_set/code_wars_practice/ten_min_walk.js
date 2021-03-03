/* eslint-disable max-lines-per-function */
/*
create a function that will return true if the walk
the app gives you will take you exactly
ten minutes (you don't want to be early or late!)
and will, of course, return you to your
starting point. Return false otherwise.

input - array of strings with strings being n,s,e, or w
output - boolean
true condition - if takes exactly 10 mins (10 strings in array)
&& need to return to starting pt
to return to starting pt, you would need an equal num of
north to south or east to west

pseudocode:
let nStrings be 0
let sStrings be 0
let wStrings be 0
let eStrings be 0

if array's length !== 10
  return false

for loop over array
  if array[idx] is n,s,e,w
  += 1 for that count

if nStrings !== sStrings
  return false

if eStrings !== wStrings
  return false
otherwise return true
*/


function isValidWalk(arr) {
  let nCount = 0;
  let sCount = 0;
  let eCount = 0;
  let wCount = 0;

  if (arr.length !== 10) {
    return false;
  }

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === 'n') {
      nCount += 1;
    } else if (arr[idx] === 's') {
      sCount += 1;
    } else if (arr[idx] === 'e') {
      eCount += 1;
    } else {
      wCount += 1;
    }
  }

  if (nCount !== sCount) {
    return false;
  }

  if (eCount !== wCount) {
    return false;
  }

  return true;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // true
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // false

// function northSouthEqual(nCount, sCount) {
//   if (nCount !== sCount) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function eastWestEqual(eCount, wCount) {
//   if (eCount !== wCount) {
//     return false;
//   } else {
//     return true;
//   }
// }

// function isValidWalk(arr) {
//   let nCount = 0;
//   let sCount = 0;
//   let eCount = 0;
//   let wCount = 0;

//   if (arr.length !== 10) {
//     return false;
//   }

//   for (let idx = 0; idx < arr.length; idx++) {
//     if (arr[idx] === 'n') {
//       nCount += 1;
//     } else if (arr[idx] === 's') {
//       sCount += 1;
//     } else if (arr[idx] === 'e') {
//       eCount += 1;
//     } else {
//       wCount += 1;
//     }
//   }

//   northSouthEqual(nCount, sCount);
//   eastWestEqual(eCount, wCount);

//   return true;
// }

/*

my attempt at making that function smaller

*/