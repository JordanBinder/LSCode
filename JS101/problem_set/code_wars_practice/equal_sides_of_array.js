// eslint-disable-next-line max-lines-per-function
function findEvenIndex(arr) {

  for (let idx = 0; idx < arr.length; idx++) {
    let arr1 = arr.slice(0, idx);
    let arr2 = arr.slice(idx + 1);
    let arr1Sum;
    let arr2Sum;

    if (arr1.length === 0) {
      arr1Sum = 0;
    } else {
      arr1Sum = arr1.reduce((accum, currentVal) => accum + currentVal);
    }

    if (arr2.length === 0) {
      arr2Sum = 0;
    } else {
      arr2Sum = arr2.reduce((accum, currentVal) => accum + currentVal);
    }

    if (arr1Sum === arr2Sum) {
      return idx;
    }
  }

  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1])); // 3
console.log(findEvenIndex([1,100,50,-51,1,1])); // 1
console.log(findEvenIndex([1,2,3,4,5,6])); // -1
console.log(findEvenIndex([20,10,30,10,10,15,35])); // 3

/*
Pseudocode:

let result = 0
for loop
  arr1 is sliced arr from 0 to idx
  arr 2 is sliced arr from idx + 1
  arr1Sum is reducer method to sum arr1
  arr2Sum is reducer method to summ arr2
  if arr1Sum === arr2Sum
  return arr1Sum (might be issue if multiple answers present in arr)

if result === 0
  result = -1

return result


Note:

The most important thing here was making sure the reduce
function never took in an empty array
because an empty array would throw an error.
Once we created an if stmt for the array in the case
of an empty array, it worked great!
*/
