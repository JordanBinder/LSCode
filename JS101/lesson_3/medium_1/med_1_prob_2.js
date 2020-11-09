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