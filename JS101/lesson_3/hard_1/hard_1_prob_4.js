// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       break;
//     }
//   }

//   return true;
// }
/*
Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things.
You're not returning a false condition, and you're not handling the case when the input 
string has more or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

Help Ben fix his code.
*/

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split("."); // creates array of nums

  if (dotSeparatedWords.length !== 4) {
    console.log('Please enter a valid IP address.')// edge case here: if input string doesn't have exactly 4 components, should be invalid. By invalid, maybe give user error message?
    
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress(6.1.9.5));