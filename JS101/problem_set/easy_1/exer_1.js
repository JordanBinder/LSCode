// Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

function isOdd (integer) {
  if (Math.abs(integer) % 2 === 1) {
    return true;
  } else {
    return false;
  }
}


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true


/* Launch School Solution
function isOdd(number) {
  return Math.abs(number) % 2 === 1;
} /*

// this works because the return statement in the code block is a boolean expression. If the remainder is 1, return true. Else, return false.