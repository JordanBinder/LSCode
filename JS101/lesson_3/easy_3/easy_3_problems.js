// # 1 - Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

/*
while (numbers.length) {
  numbers.pop();
}
same idea, better execution than the below haha.
*/
numbers.pop().pop().pop().pop();

numbers.filter(char => char === "nothing");
// this resulted in an empty array. Is that ok?

numbers.length = 0;

// # 2 - What will the following code output?

console.log([1, 2, 3] + [4, 5]);

// I think it will return [[1, 2, 3], [4, 5]]

/* correct:
1,2,34,5
In some languages you can use + to concatenate two arrays, but not in JavaScript. In JavaScript, the + operator 
first converts the arrays to strings, and then concatenates the strings, so the output is the string 1,2,34,5.
*/

// # 3 - What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)

// I think it will output "hello there".

// # 4 - What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// returns this: [ { first: 42 }, { second: 'value2' }, 3, 4, 5 ]

// Slice performs a shallow copy rather than a deep copy. Thus, arr1[0] and arr2[0] point to the same object,

// # 5 - The following function unnecessarily uses two return statements to return boolean values. How can you eliminate the unnecessary duplication?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

  // one way is to get rid of the if statement as we get a boolean regardless. Don't forget to add return stmt.

function isColorValid(color) {
  return color === "blue" || color === "green";
}

const isColorValid = color => ["blue", "green"].includes(color);

/*
color === "blue" || color === "green" ? true : false
I tried to do a ternary operator for the second option but I realized this doesn't work. Ternary operators don't create params which we needed 'color'
to get a boolean.
/*