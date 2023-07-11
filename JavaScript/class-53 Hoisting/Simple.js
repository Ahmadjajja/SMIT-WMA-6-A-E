// var num1;
// var num2;
// function sum(n1, n2) {
//   return n1 + n2;
// }

// console.log(num1); // undefined
// num1 = 10;
// num2 = 20;
// console.log(sum(n1, n2));

// (const, let)  VS Var     w.r.t Hoisting
let num1; //         =
let num2; //         =
var sum; //         =
// Temporal Dead Zone
console.log(sum); //   =
//         =
num1 = 5; //         =
num2 = 5; //         =
sum = num1 + num2; // =================
