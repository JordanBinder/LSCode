// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// the second example returns undefined because the JavaScript engine put a semicolon automatically after return. It is 
// poor practice to not use proper syntax and omit semicolons because of unexpected results.