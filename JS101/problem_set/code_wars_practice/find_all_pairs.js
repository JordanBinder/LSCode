/*
P - [Understand the] Problem
E - Examples / Test cases
D - Data Structure
A - Algorithm
C - Code
*/

function duplicates(array) {
  let count = 0;
  let arr = array.sort((a, b) => a - b);
  let rubbishBin = [];

  if (array.length === 0 || array.length === 1) {
    return 0;
  }

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === arr[idx + 1]) {
      count += 1;
      rubbishBin.push(arr[idx]);
      rubbishBin.push(arr[idx + 1]);
      idx += 1;
    }
  }
  console.log(rubbishBin);
  return count;
}

/* Dom solution
function duplicates(array){
  let obj = {}
  let counter = 0
  
  array.forEach(num => {
    if (!obj[num]) obj[num] = 1;
    else obj[num] += 1;
  })
  
  for (let key in obj) {
    if (obj[key] > 1) counter += Math.floor(obj[key] / 2);
  }
  
  return counter;
}
*/
console.log(duplicates([1, 2, 5, 6, 5, 2])); // 2
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2])); // 4
console.log(duplicates([0, 0, 0, 0, 0, 0, 0])); // 3
console.log(duplicates([0, 0, 0, 0, 0, 0, 0])); // 3
// edge cases 0  or 1 value, return 0

// 


/*
i: array
o: count var

D:
count variable
mutate array by sort

High level:

create count var
sort input array [0, 1, 1, 1, 2, 3, 4]
for loop
  create [arr[idx], arr[idx + 1]]
  if arr[idx] === arr[idx + 1]
    count += 1;
    arr[idx] pops
    arr[idx + 1] pops

return count var;

*/