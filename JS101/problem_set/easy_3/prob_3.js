//Write a function that takes one argument, a positive integer, and returns a//
// string o
//f alternating
// '1's and '0's, always starting with a '1'.
//The length of the string should match the given integer.


function stringy(num) {
  let one = '1';
  let zero = '0';

  let resultingString = '';

  for (let counter = 0; counter < num; counter++) {
    if (counter % 2 === 0) {
      resultingString += one;
    } else {
      resultingString += zero;
    }
    console.log(resultingString);
  }
  //console.log(resultingString);
}

stringy(5);

// '1';
// '0';
// loop length of integer
// check if even or odd
//if odd, add 1,
// if even, add 0;


// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"


// let empty array
// let count = 0
// while (count < int)
// push 1 to empty array

//join array back into string (explicit conversion)