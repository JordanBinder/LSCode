
// not mutated.
function doubleNumbers(numbers) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * 2);

    counter += 1;
  }

  return doubledNums;
}


// mutated version.ß
function doubleNumbers(array) {
  let counter = 0;

  while (counter < array.length) {
    array[counter] *= 2;

    counter += 1;
  }
  return array;
}

// double values of array with odd indicies

function doubleNumbers(numbers, multiplier) {
  let doubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    doubledNums.push(currentNum * multiplier);

    counter += 1;
  }

  return doubledNums;
}

// double and be multiplied by any amount

