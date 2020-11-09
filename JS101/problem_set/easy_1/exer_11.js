function asciiValue(string) {
  let counter = 0 // let array = string.split(""); // break string into array of strings
  for (let i = 0; i < string.length; i++) {// iterate over array
    let asciiValue = string[i].charCodeAt();// get ascii value using String.prototype.charCodeAt()
    counter += asciiValue; // add to counter
  }
  console.log(counter);
}

// when I put the counter globally (above the function) I get wild numbers for test cases 2-4. Can't 100% articulate why but I think I get it a little.