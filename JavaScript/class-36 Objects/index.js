// basic syntax of object

let object = {
    key: "value"
}

// example

let person = {
    name : "Ahmad",   // properties
    age: "22", 
    height: "5.8",
    displayPersonInfo: function (x) {
        console.log(x);
    }
}

// accessing object properties and methods

// console.log("person.name " + person.name)
// console.log("person.age " + person.age)
// console.log("person.height " + person.height)

// person.displayPersonInfo(person)
console.log(person)
person.education = "Undergraduate"
console.log(person)
delete person.education
console.log(person)


// for (const key in person) {
//     console.log(typeof key)
//     console.log(key + person[key])
// }


// check whether specific key included in object or not
// let prop = "name"
// for (const key in person) {
//     if (key == prop) {
//         console.log("property exist")
//     } else {
//         console.log("property is not exist")
//     }
// }

// console.log("name" in person)

// "name" in person ? console.log("exist"): console.log("not exist")

// let num = 6;
// // num > 5 ? console.log("number is greater than 5") : (num < 5) ? console.log("number is smaller than 5") : "number is equal to 5"

// num == 5 && console.log("number is equal to 5")   // alternative of if statement







