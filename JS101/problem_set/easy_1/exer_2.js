// Log all odd numbers from 1 to 99, inclusive, to the console. Log all numbers on separate lines.

let i = 0

while (i <= 99) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
}

/* Launch School solution:

for (let number = 1; number < 100; number += 2) {
  console.log(number);
}

/*

// Launch School's is more optimized because the loop does not have to check for the odd numbers. I could do this with my while loop as well.
