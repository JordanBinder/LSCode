Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
What will the following function invocation return?

bar(foo());

// I believe what was confusing was the argument 'param = "no"' here. Regardless of what is in those parentheticals
// foo returns "yes." This means that bar will have gto interpret '"yes" === "no".'