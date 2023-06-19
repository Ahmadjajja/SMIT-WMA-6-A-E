// Practice exercise 13.1

// This exercise will demonstrate how to use a callback function, creating a
// way to pass a value from one function to another by invoking a callback
// function. We will create a greeting callback using a full name in a string.

// 1. Create a function named greet() that takes one argument, fullName.
// That argument should be an array.Output the items of the array into
// the console interpolated into a greeting message string.

// 2. Create a second function that has two arguments: the first one is a
// string for the user's full name, and the second is the callback
// function.

// 3. Split the string into an array using the split() method.

// 4. Send the full - name array to the greet() function created in the first
// step.

function greet(fullName) {
    console.log(`Hello! ${fullName[0]} ${fullName[1]}`)
}

function second(name, callback) {
    fullName = name.split(" ")
    callback(fullName)
}

second("Ahmad Sultan", greet)

