/*
Given a string of integers, return the number of odd-numbered substrings
that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341,
a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

input string output num

What kinds of data?

let count = 0;

for loop with i = 0
  for loop with j = 1
    let substr = substring method with i & j
    if substr % 2 === 1
      count += 1
*/




function solve(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length + 1; j++) {
      let substr = string.substring(i, j);
      if (Number(substr % 2 === 1)) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(solve("1341")); // 7