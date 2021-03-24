/*


algorithm:

create empty result arr

loop over string with idx 1
  push sliced string from 0 to idx to result arr

return result arr  
*/


// function substrings(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i += 1){
//     for (let j = i + 1; j <= str.length; j += 1) {
//       arr.push(str.slice(i, j));
//     }
//   }
//   return arr;
// }

function leadingSubstrings(string) {
  let resultArr = [];

  for (let idx = 1; idx <= string.length; idx++) {
    resultArr.push(string.slice(0, idx));
  }
  return resultArr;
}

console.log(substrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
