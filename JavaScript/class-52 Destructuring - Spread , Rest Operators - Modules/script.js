// Destructuring w.r.t Arrays

// Traditional way to get elements and subArray from origional array

const arr = [2, 4, 5, 7, 8];
let element1 = arr[0];
let element2 = arr[1];
let element3 = arr[2];
let subArr = [];
for (let index = 3; index < arr.length; index++) {
  subArr.push(arr[index]);
}

// Latest way to get elements and subArray from origional array
let [elem1, elem2, elem3, ...remainingArr] = arr;
// ...remainingArr called Rest Operator
// This operator used in two places
// 1- In destructuring
// 2- In functions parameters
// Rest operators actually used when we don't know how many elements to store in variable

// Destructuring w.r.t Objects

// Traditional way to get propertie's values and subObject from origional array

let obj = {
  name: "Ahmad",
  age: 22,
  qualification: "Undergraduate",
  skills: "Full Stack Engineer",
};

let property1 = obj.name;
let property2 = obj.age;

// Latest way to get propertie's values and subObject from origional array
let { qualification, age, ...subObject } = obj;
console.log(qualification);
console.log(age);
console.log(subObject);

// Latest way to get characters and subArray from origional String
const [ch1, ch2, ...remChArr] = "Ahmad";
console.log(ch1);
console.log(ch2);
console.log(remChArr);

// Spread Operator w.r.t Arrays
// Spread Operator actually spreads all elements of array

let names = ["Ali", "Ahmad", "Rehman", "Hamza"];
console.log(names);
console.log(...names);
let ages = [20, 21, 19, 18];
let info = ["Hammad", ...names, "20", ...ages];
let info1 = ["Ali", "Ahmad", "Rehman", "Hamza", ...ages];
console.log(info);
console.log(info1);

// Spread Operator w.r.t objects
// Spread Operator actually spreads all elements of array

const obj1 = {
  name: "Ahmad",
  age: 22,
  qualification: "Undergraduate",
  skills: "Full Stack Engineer",
};
const wholeInfo = {
  name1: "Hammad",
  age1: 20,
  qualification1: "undergraduate",
  skills1: "Front-end developer",
};
let wholeInfo1 = { ...wholeInfo, ...obj1 };
console.log(wholeInfo1);
