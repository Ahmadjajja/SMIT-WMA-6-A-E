// Simple Function
function sum1(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log("sum using simple function : ", sum1(3, 4, 5));
// Curying
// There are multiples form of curying:
// 1) Manual Curying
// 2) Arrow function
// 3) bind

// 1- Manual Curying
function curry(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

// Method 1

let nested1 = curry(3);
//   next lines of statements
//      .
//      .
//      .
//      .
//      .
//      .
//      .
//      .
//      .

let nested2 = nested1(4);
//   next lines of statements
//      .
//      .
//      .
//      .
//      .
//      .
//      .
//      .
//      .
let result = nested2(5);
// console.log("sum using curying : ", result);

// Method 2
console.log(curry(3)(4)(5));

// Why use
//  let suppose if currently we have'nt all arguments to get actual result from a function
//  In future when we gets all arguments then we can all inner most function to get actual results

// 2- Arrow functions curying

let sum2 = (num1) => (num2) => (num3) => num1 + num2 + num3;

// Method 1
// sum is equal to : (num1) => (num2) => (num3) => num1 + num2 + num3;
console.log(sum2);

let firstNestedFunc = sum2(3);
// firstNestedFunc is equal to : (num2) => (num3) => num1 + num2 + num3;
console.log(firstNestedFunc);

let secondNestedArrowFunc = firstNestedFunc(4);
// secondNestedArrowFunc is equal to : (num3) => num1 + num2 + num3;
console.log(secondNestedArrowFunc);

let thirdNestedArrowFunc = secondNestedArrowFunc(5);
// secondNestedArrowFunc is equal to :  num1 + num2 + num3;
console.log(thirdNestedArrowFunc);

// 3- bind
function multilpy(num1, num2, num3) {
  console.log(num1, num2, num3);
  return num1 * num2 * num3;
}

console.log(multilpy);
let multilpyBySecond = multilpy.bind(null, 5);

console.log(multilpyBySecond);
let multilpyByThird = multilpyBySecond.bind(null, 4);

console.log(multilpyByThird);
console.log(multilpyByThird(3));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

function sum(num1, num2, num3, num4) {
  return num1 + num2 + num3 + num4;
}
sum(2, 3, 4, 5);

// Curying form
function sumCurry(num1) {
  return function (num2) {
    return function (num3) {
      return function (num4) {
        return num1 + num2 + num3 + num4;
      };
    };
  };
}

let nestedFunc1 = sumCurry(2);
// // nestedFunc1 = function (num2) {
// //   return function (num3) {
// //     return function (num4) {
// //       return num1 + num2 + num3 + num4;
// //     };
// //   };
// // };
let nestedFunc2 = nestedFunc1(3);
// // nestedFunc2 = function (num3) {
// //   return function (num4) {
// //     return num1 + num2 + num3 + num4;
// //   };
// // };

// let nestedFunc3 = nestedFunc2(4);
// // nestedFunc3 = function (num4) {
// //   return num1 + num2 + num3 + num4;
// // };
// let nestedFunc4 = nestedFunc3(5);
// // nestedFunc4 = 14

sumCurry(2)(3)(4)(5); // 14
