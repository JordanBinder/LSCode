// Log all even numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

let i = 1

for (i; i <= 99; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/* LS solution:

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}

/*

// not sure why continue was necessary. Seems that my solution works just as well. 
// Maybe by continuing over odd numbers you make the loop more scalable?