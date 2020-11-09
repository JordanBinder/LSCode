let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);


// Output is: { first: [ 1, 2 ] }
// I understood this because I knew that Array.push would mutate the original object's value (the array tied to key 'first').