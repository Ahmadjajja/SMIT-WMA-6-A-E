// Iterables

// let str = 'abc';
// for (let char of str) {
//     console.log(char);
// }


// const person = {
//     name: 'anas',
//     age: 24,
//     degree: 'bscs'
// }

// for (let i of person) {
//     console.log(i);
// }




// Sets

// const arr = [1, 2, 34, 3, 5, 5, 5, 5];
// console.log(arr);


// let fruits = new Set([0, 1, 8]);
// let fruits1 = fruits;

// fruits.add('newValue')


// console.log(fruits);
// console.log(fruits1);




// Maps

// const obj = {
//     name: 'anas',
//     age: 23,
//     university: 'Riphah'
// }


// const person = new Map([["name", "anas"], ["Age", 23], ["degree", 'bscs']]);
// const person1 = person
// person.set('key', 'value')
// for (let i of person) {
//     console.log(i[1]);
// }
// person.set('class', '9th');
// const test = person.get('name')
// console.log(person);
// console.log(person1);



// Object.assign

// const obj1 = {
//     name: 'anas',
//     age: 34,
// };
// const obj2 = Object.assign({}, obj1)
// console.log(obj1);
// console.log(obj2);


// Optional chaining


// const person = {
//     name: 'anas',
//     age: 23,
//     university: 'Riphah',
//     hobbies: ['sleeping', 'sleeping', 'sleeping'],
//     skillType:{
//         technical: ['python', 'java'],
//         nonTechnical: ['presentation', 'communication']
//     }
// }

// console.log(person?.skillType?.technical);