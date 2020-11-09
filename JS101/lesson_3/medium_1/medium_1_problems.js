/* # 1 - Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

For this practice problem, write a program that creates the following output 10 times, with each line indented 1 space to the right of the line above it:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
*/

let flintstones = "The Flintstones Rock!"; // create string variable

// for as long as there are less than or equal to 10 flintstones strings
  // console.log flintstones and pad with one space;
    // space plus 1?


/* my attempt
let count = 0;

while (count <= 10) {
  flintstones = flintstones.padStart(1 + count, " ");
  console.log(flintstones);
  count++;
    }

*/

for (let padding = 1; padding <= 10; padding++) {
  console.log(" ".repeat(padding) + "The Flinstones Rock!");
}

//same exact idea but differen't execution. Don't understand why mine doesnt pad the beginning but I do understand why their's works.

//

// # 2 - Return a new string that swaps the case of all of the letters:

let munstersDescription = "The Munsters are creepy and spooky.";

munstersDescription.split("").map(function(char) {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join("");

// original attempt:

// function reverseCases (string) {
//   string.split("");
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i].toUpperCase) {
//       string[i].toLowerCase();
//     } else {
//       string[i].toUpperCase();            
//     }
//     string.concat();
//   }
//   console.log(string);
// }

// I understand how .map is better in this case.