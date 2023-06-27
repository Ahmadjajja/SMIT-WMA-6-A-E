// Synchronous JS
// Javascript is single threaded language
// Each line of code will execute in sequence

// let x = 2;
// console.log(x);
// let data = .ajax("asdfjal;sdjfa;klsdjflkjs") // Any API call
// console.log(data)

// Asynchronous JS

// let x = 2;
// console.log(x);
// setTimeout(() => console.log("Hello, i am late"), 2000);
// console.log("Hello, i will...");

// // CallBack

// function num1() {
//   return 5;
// }
// function num2() {
//   return 10;
// }

// function sum(cb1, cb2) {
//   return cb1() + cb2();
// }
// console.log(sum(num1, num2));

// Promises
// Three states of promise
// 1) pending 2) Resolve 3) Reject

// const p = new Promise((resolve, reject) => {
//   let x = 8;
//   if (x > 10) {
//     resolve("Something done!");
//   } else {
//     reject("Something rejected!");
//   }
// });

// p.then(
//   (value) => console.log("value: " + value),
//   (error) => console.log("error: " + error)
// );

const p = new Promise((resolve, reject) => {
  let x = 12;
  if (x > 100) {
    resolve("Something done!");
  } else {
    reject("Something rejected!");
  }
})
  .then((value) => {
    console.log(value);
    console.log(value);
    return "Something done2!";
  })
  .then((value) => {
    console.log(value);
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
    console.log(error);
    throw new "Something done3 from first catch"();
  })
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
