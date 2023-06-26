// Practice exercise 13.3

// This exercise will demonstrate how to use await to wait on a Promise
// inside an async function. Using await and async , create a counter with
// timeout() , and increment a global counter value.

// 1. Create a global value for a counter.

// 2. Create a function that takes one argument. Return the result of a new
// Promise, setting a setTimeout() function that will contain the resolve
// instance.

// 3. Increment the counter within setTimeout() , adding one every second.
// Resolve the Promise with the value of the counter and the value of the
// variable that was in the function argument.

// 4. Create an asynchronous function that outputs into the console the
// value of the global counter and the value of the argument of the
// function.

// 5. Create a variable to capture the returned resolve value from the await
// function. Output that result into the console.

// 6. Create a loop to iterate 10 times, incrementing the value and invoking
// the async function, passing the value of the increment variable as the
// parameter in the function.

// The results should look like the following:
// ready 1 counter:0
// ready 2 counter:0
// ready 3 counter:0
// x value 1 counter:1
// x value 2 counter:2
// x value 3 counter:3

var counter = 0;

function simpleFunc(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      counter++;
      resolve(`x value ${x} counter:${counter}`);
    }, 1000 * x);
  });
}

async function asyncFunc(x) {
  console.log(`ready ${x} counter:${counter}`);
  var capture = await simpleFunc(x);
  console.log(capture);
}

for (let index = 1; index <= 10; index++) {
  asyncFunc(index);
}
// ready 1 counter: 0
// ready 2 counter: 0
// ready 3 counter: 0
// ready 4 counter: 0
// ready 5 counter: 0
// ready 6 counter: 0
// ready 7 counter: 0
// ready 8 counter: 0
// ready 9 counter: 0
// ready 10 counter: 0
