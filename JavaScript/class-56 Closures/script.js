// Closures

// Basic closure
let num1 = 5; // global scope
function outerFunction() {
  let num2 = 2;
  console.log("Something going on...");
  function innerfunc() {
    console.log("num : " + (num1 + num2));
  }
  return innerfunc;
}
let innerfunc = outerFunction();
innerfunc();

// Loop closure
function print(i) {
  return function () {
    console.log(i);
  };
}

let printFunctions = [];
for (let index = 0; index < 5; index++) {
  printFunctions.push(print(index));
}

printFunctions[0](); // 0
printFunctions[1](); // 1
printFunctions[2](); // 2
printFunctions[3](); // 3
printFunctions[4](); // 4
