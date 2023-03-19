// let fruits = ['kivi', 'Mango', 'Carrot'];

// for (let i = 0; i < 5; i++){
//     console.log(fruits[i]);
// }

// let str = 'hassan';

// str[0] = 'A';
// console.log(str);
// for (let i = 0; i < str.length; i++){
//     console.log(str[i]);
// }

// dot vs bracket notation
// const person = {
//     name: 'Anas',
//     gender: 'Male',
//     age: 23,
//     hobbies: ['Cricket', 'Sleeping'],
//     "my height": 6,
// };


// person.name = 'Hassan';
// person = {
//     name: 'hassan'
// }


// console.log(person['my height']);



// let key = 'email';
// let value = 'anas@gmail.com';

// let user = {
//     [key]: value,
// }

// console.log(user);

// itrate objcts
// const person = {
//     name: 'Anas',
//     gender: 'Male',
//     age: 23,
//     hobbies: ['Cricket', 'Sleeping'],
//     "my height": 6,
//     i: 'test'
// };

// for(let i in person){
//     console.log(person[i]);
// }

// console.log(Object.keys(person));
// for (let i of Object.keys(person)){
//     console.log(person[i]);
// }

// console.log();


// spread operators in array (revise)

// let cars = ['mehran', 'civic'];
// let bikes = ['honda', 'yamaha'];

// let vehicles = [...cars, ...bikes];
// console.log(vehicles);

// console.log([...2323233]);


// let laptop = {
//     company: 'hp',
//     ram: 4,
//     rom: 1000,
// }

// let mobile = {
//     company1: 'Qmobile',
//     ram1: 2,
//     rom1: 16,
// }

// let gadgets = {
//     ...laptop,
//     ...mobile,
//     company: 'abc',
// };
// console.log(gadgets);


// destruction

// let fruits = ['kivi', 'mango', 'banana', 'apple'];
// let [fruit1, fruit2, ...remaining] = fruits;
// console.log(fruit1, fruit2, remaining);

// let person = {
//     name: 'anas',
//     age: 23,
//     email: 'anas@gmail.com',
//     hobbies: ['sleeping', 'cricket']
// };

// let { name: newname , email, hobbies } = person;
// console.log(newname, email, hobbies[0]);


let array = [
    {
        uid: 1,
        title: 'learn python in 5 minutes',
        thumbnail: 'https://',
        video: 'askldsljd',
    },
    {
        uid: 2,
        title: 'learn python in 5 minutes',
        thumbnail: 'https://',
        video: 'askldsljd',
    },
    {
        uid: 3,
        title: 'learn python in 5 minutes',
        thumbnail: 'https://',
        video: 'askldsljd',
    },
];

let [{video}, , {uid}] = array;
console.log(uid, video);


