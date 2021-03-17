/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

input: integer
output: string showing expanded form of input integer

algorithm:
turn num into string // '70304'
70304 / Number('1' + '0'.repeat(length of stringedNum - 1))
70304 / Number('10' + '0'.repeat('70304'.length - 1 ***will become idx***)

stringed-number at index + 0's repeating (stringed-number's length - index) times
push to resultArr



pseudocode:
*/

/*

function expandedForm(num) {
  let stringedNum = String(num);
  let resultArr = [];

  for (let idx = 0; idx < stringedNum.length; idx++) {
    let incrementingNum = 1;
    let numToPush = Math.floor(num / Number('1' + '0'.repeat(stringedNum.length - incrementingNum)))
                    + Number('0'.repeat(incrementingNum));
    // numToPush += Number('0'.repeat(incrementingNum));
    // resultArr.push(numToPush);
    return numToPush;
  }
}

*/

function expandedForm(num) {
  let containerArr = [];
  let numString = num.toString();
  let numArr = numString.split("");
  for (let i = 0; i < numString.length; i += 1) {
      if (numArr[i] !== "0") {
        containerArr.push(numArr[i].padEnd((numString.length - i), "0"));
    }
  }
  return containerArr.join(" + ");
}


console.log(expandedForm(12)); // '10 + 2'));
console.log(expandedForm(42)); // , '40 + 2'));
console.log(expandedForm(70304)); // , '70000 + 300 + 4'));