var futureDate = new Date("June 30, 2035");
var rightNow = new Date();

var msDoomsday = futureDate.getTime(); // 1970 - 2035 
var msToday = rightNow.getTime();   // 1970 - 2023

console.log(msDoomsday);
console.log(msToday);
var msDiff = msDoomsday - msToday;
console.log(msDiff);

// calculate day difference of 2035 and current year
var dDiff = msDiff / (1000 * 60 * 60 * 24*365);
console.log(dDiff.toFixed(0));


//sun - 0
//mon - 1
//tue - 2
//wed - 3
//thu - 4
//fri - 5
//sat - 6

// getDay

// var dayNumber = rightNow.getDay();
// var arr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// var dayName = arr[dayNumber];
// console.log("today is ", dayName)

// getDate
// console.log(rightNow.getDate())
// console.log(rightNow.getFullYear());

//Midnight
// 12:01am to 1:00am // 0
// 01:00am to 2:00am // 1
// .
// .
// .
// .
// .
// .
// 12pm to 1:00pm // 13
// .
// .
// .11:00pm to 11:59pm // 23
// console.log(rightNow.getHours());
// console.log("one day have ", 1*60*60*1000, "a miliseconds");
// console.log((rightNow.getTime()/(365*24*60*60*1000)).toFixed(0));
