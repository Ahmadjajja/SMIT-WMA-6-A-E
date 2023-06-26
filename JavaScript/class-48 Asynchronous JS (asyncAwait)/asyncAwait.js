// With the async keyword, we can
// make a function return a Promise.

// we can use the more
// powerful await keyword to wait until the Promise is done. await only
// works in an asynchronous function.

// Await
// This keyword will be used with async function
// When we used this keyword, control will wait for promise to reject or resolve

// async function asyncFunc() {
//   let resonse = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hello, Something is going good");
//     }, 2000);
//   });
//   console.log(resonse);
// }

// asyncFunc();

function saySomething1(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("something is printed after 8000 -> " + x);
    }, 8000);
  });
}
async function talk1(x) {
  console.log("Hi1 Before");
  const words = await saySomething1(x);
  console.log("Hi1 After");
  console.log(words);
}
function saySomething2(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("something is printed after 4000 -> " + x);
    }, 4000);
  });
}
async function talk2(x) {
  console.log("Hi2 before");
  const words = await saySomething2(x);
  console.log("Hi2 after");
  console.log(words);
}
function saySomething3(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("something is printed after 5000 -> " + x);
    }, 5000);
  });
}
async function talk3(x) {
  console.log("Hi3 before");
  const words = await saySomething3(x);
  console.log("Hi3 after");
  console.log(words);
}
talk1(2); // 8 seconds for exectution
talk2(4); // 4 seconds for exectution
talk3(8); // 5 seconds for exectution
console.log("something");
