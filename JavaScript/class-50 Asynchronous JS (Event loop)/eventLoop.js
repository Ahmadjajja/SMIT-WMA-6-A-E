// JavaScript is a single-threaded
// language. A thread in this context means a path of execution. If there is only
// a single path, this means that tasks will have to wait for one another and
// only one thing can happen at a time.
// This single executor is the event loop.

console.log("hello peeps");
function somethingGreet() {
  console.log("Hey, you are doing great!");
}
var x = 2;
console.log("X : ", x);
somethingGreet();

// Call stack and callback queue

// Call Stack
//  Stack refers to Last-IN-First-Out (LIFO)

function first() {
  console.log("first...");
  two();
}
function two() {
  console.log("two...");
  three();
}
function three() {
  console.log("three...");
  four();
}
function four() {
  console.log("four...");
  five();
}
function five() {
  console.log("five...");
}
first();

// Thought Process of Stack (LIFO)

//             //
//             //
//             //
//   ball3     //
//   ball2     //
//   ball1     //
// // // // // //

// callback queue (FIFO)
// Queue refers to First-IN-First-Out (FIFO)

// Thought Process of Queue (FIFO)

// // // // // // // //
//  man4 man3 man2 man1
// // // // // // // //

// Event Loop

console.log("Person 1");
setTimeout(() => console.log("Person 2"), 3000);
console.log("Person 3");
setTimeout(() => console.log("Person 4"), 2000);
console.log("Person 5");

// console.log("Person 1");
// setTimeout(() => console.log("Person 2"), 0);
// console.log("Person 3");
// setTimeout(() => console.log("Person 4"), 0);
// console.log("Person 5");
