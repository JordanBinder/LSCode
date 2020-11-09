// The || operator returns a truthy value if either or both of its operands are truthy, a falsey value if both operands are falsey. The && operator returns a truthy value if both of its operands are truthy, and a falsey value if either operand is falsey. This works great until you need only one of two conditions to be truthy, the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two arguments, and returns true if exactly one of its arguments is truthy, false otherwise.

// Examples:

function xor (arg1, arg2) {
  if ((arg1 && !arg2) || (arg2 && !arg1)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);



/* initial attempt:

function xor (arg1, arg2) {
  if (arg1 && arg2 === true) {// if both are true
    return false;// return false
  } else if (arg 1 && arg2 === false) { // else if both are false
      return false;// return false
  } else {   // else // return true 
      return true
  }
}

This did not work.

*/
