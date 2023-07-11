// // Hoisting
// // This is the by-default behavior of javascript
// // hoisting takes all declartions to top, not initilization
// console.log(num1);
// var num1 = 10;
// var num2 = 20;

// console.log(sum(num1, num2));
// function sum(n1, n2) {
//   // function declarations
//   return n1 + n2;
// }
// let sum2 = (n1, n2) => n1 + n2;
// sum2(3, 4);
// let sum3 = function (n1, n2) {
//   return n1 + n2;
// };
// sum3(3, 4);

// // (const, let)  VS Var     w.r.t Hoisting
// // Var
// // 1) - Var declarations can be hoisted to the top
// // 2) - variable declared with var can be accessed before where it is actually written.
// // let & const
// // 1) - let & const declarations can be hoisted to the top
// // 2) - variable declared with let & const can't be accessed before where it is actually written (initialized)
// //      because of "temporal dead zone".

// console.log(sum); // error
// let num1 = 5;
// let num2 = 5;
// var sum = num1 + num2;

// console.log(greet); //  error

function greetSomething(message) {
  var greet;
  console.log(greet); //  undefined
  greet = message;
  console.log(greet); // Hello, you are doing good.
  return greet;
}

greetSomething("Hello, you are doing good.");
