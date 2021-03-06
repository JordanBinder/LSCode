/*
accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.

function declaration
  declare resultArr
  declare count
  edge case of not being equal length

  for loop idx 0
    push firstArr[idx] to resultArr
    resultArr[idx] += secondArr[idx]
    resultArr[idx] ** 2
    count += resultArr[idx]

  return count / length of secondArr
*/

var solution = function(firstArray, secondArray) {
  let count = 0;

  if (firstArray.length !== secondArray.length) {
    return 'Yo deez arrays is not the same length bruv';
  }

  for (let idx = 0; idx < secondArray.length; idx++) {
    let currentVal = Math.pow((firstArray[idx] - secondArray[idx]), 2);
    count += currentVal;
  }

  return count / secondArray.length;

};

console.log(solution([1,2,3],[4,5,6])); // , 9)
console.log(solution([10,20,10,2],[10,25,5,-2])); // , 16.5)
console.log(solution([0,-1], [-1,0])); // , 1);

// var solution = function(firstArray, secondArray) {
//   let resultArr = [];
//   let count = 0;

//   // if (firstArray.length !== secondArray.length) {
//   //   return 'Yo deez arrays is not the same length bruv';
//   // }

//   for (let idx = 0; idx < secondArray.length; idx++) {
//     resultArr.push(firstArray[idx]);
//     resultArr[idx] -= secondArray[idx];
//     Math.pow(resultArr[idx], 2);
//     count += resultArr[idx];
//   }

//   return count / secondArray.length;

// };