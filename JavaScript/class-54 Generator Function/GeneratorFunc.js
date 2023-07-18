// Regular function
function sum(num1, num2) {
  console.log(num1 + num2);
  return num1 + num2;
  console.log(num1 + num2);
}
console.log(sum(5, 4)); // 9

// Generator Function
//  This is special type of function in javascript that used for pause and resume the function execution.
//  Mostly this is used when we have to get values in sequence over time

function* sequenceGenerator() {
  let x = 1;
  yield x;
  // Yield keyword is just like return statement in simple function but it's behavior is different
  // Common thing b/w return and yield is:
  //                                    Both returns values
  // Difference b/w return and yield is :
  //                                    Return statement terminates the functions execution when it is executed
  //                                    Yield statement paused the functions execution when it is executed.
  yield ++x;
  // ++x (Pre fix)  vs  x++ (post fix)
  yield ++x;
}

const iterator = sequenceGenerator();
let check = false;
let lastValue;
while (!check) {
  let obj = iterator.next();
  console.log("obj : ", obj);
  check = obj.done;
  if (check == false) {
    lastValue = obj.value;
  }
}
console.log(lastValue);

// Passing Argument in Generator function
function* sequenceGenerator2(nums) {
  for (const num of nums) {
    yield num * num;
  }
}

let arr = [1, 2, 3, 4, 5];
const iterator2 = sequenceGenerator2(arr);
console.log(iterator2.next()); // {value : 1, done: false}
console.log(iterator2.next()); // {value : 4, done: false}
console.log(iterator2.next()); // {value : 9, done: false}
console.log(iterator2.next()); // {value : 16, done: false}
console.log(iterator2.next()); // {value : 25, done: false}
console.log(iterator2.next()); // {value : undefined, done: true}
