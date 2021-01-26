
// function fibonacci(nth) {
//   let previousTwo = [1, 1];

//   for (let counter = 3; counter <= nth; counter += 1) {
//     previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
//   }

//   return previousTwo[1];
// }

// function fibonacci(nth) {
//   if (nth <= 2) {
//     return 1;
//   }
//   return fibonacci(nth - 1) + fibonacci(nth - 2);
// }

function fibonacci(num) {
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));