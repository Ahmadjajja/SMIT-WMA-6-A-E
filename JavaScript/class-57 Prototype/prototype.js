// // We often use this syntax for declaring objects
let simpleObject = { color: "brown" };
console.log(simpleObject); // { color: "brown" }
console.log(simpleObject.__proto__); // {}
console.log(simpleObject.__proto__.__proto__); // null
// Inner implimentation of above code below are :
// This syntax used inside (under the hood)
function Object() {}
let innerObject = new Object();
console.log(innerObject);

// ====================================================================================
function Cow(color) {
  this.color = color;
}
Cow.prototype.age = "10";
let cowObject = new Cow("Brown");
console.log(cowObject); // {color : "Brown"}
console.log(cowObject.__proto__); // {age: "10"}
console.log(cowObject.__proto__.__proto__); // {}           // confusion is here
console.log(cowObject.__proto__.__proto__.__proto__); // null

// ====================================================================================

// Why use and what's the importance of prototypes??

function person(name) {
  this.name = name;
}
person.prototype.age = "22";
let personObject = new person("Baloch");
console.log(personObject.name); // Baloch
console.log(personObject.age); //  22

// ====================================================================================

// How we can add chain of prototypes??
function person1(name) {
  this.name = name;
}
person1.prototype.age = "22";
let personObject1 = new person1("Baloch");
// console.log(personObject1.name); // Baloch
// console.log(personObject1.age); //  22

function student(qualification) {
  this.qualification = qualification;
}
student.prototype.degree = "BSCS";
const studentObject = new student("undergraduate");

Object.setPrototypeOf(person1.prototype, studentObject.__proto__);
console.log(personObject1); // { name: 'Baloch' }
console.log(personObject1.__proto__); // { age: '22' }
console.log(personObject1.__proto__.__proto__); // {}   -> confusion is here
console.log(personObject1.__proto__.__proto__.__proto__); // {}
console.log(personObject1.__proto__.__proto__.__proto__.__proto__); // null
