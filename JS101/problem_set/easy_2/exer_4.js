// Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

// Example:

function multiply (num1, num2) {
  return num1 * num2;
}

function square(number) {
  return multiply(number, number);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) == 64); // logs true


// didn't understand initially how to 'use' the multiply function here but it was very simple. It meant to literally use it in the block code.