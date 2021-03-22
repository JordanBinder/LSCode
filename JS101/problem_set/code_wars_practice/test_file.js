/*
This is to test the new 2.3.1 Git install

FizzBuzz

input integer

output string of characters where:
if divisible by 3, output fizz
divisible by 5, output buzz
if both, output fizzbuzz

Data structures:
empty arr

*/

function fizzbuzz(num) {

  for (let idx = 1; idx <= num; idx++) {
    if (idx % 3 === 0 && idx % 5 === 0) {
      console.log('FizzBuzz');
      continue;
    }

    if (idx % 3 === 0) {
      console.log('Fizz');
      continue;
    }

    if (idx % 5 === 0) {
      console.log('Buzz');
      continue;
    }

    console.log(idx);
  }
}

fizzbuzz(30);

// 1, 2, fizz, 4, buzz, fizz,