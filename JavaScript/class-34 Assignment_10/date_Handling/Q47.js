// 47. Write a JavaScript function to get time differences in weeks between two dates.   

// Test Data :

// dt1 = new Date("June 13, 2014 08:11:00");

// dt2 = new Date("October 19, 2014 11:13:00");

// console.log(diff_weeks(dt1, dt2));

// 18

var dt1 = new Date("June 13, 2014 08:11:00");

var dt2 = new Date("October 19, 2014 11:13:00");

var weakOfDt1 = (dt1.getTime() / (1000 * 60 * 60 * 24 * 7)).toFixed(0);
var weakOfDt2 = (dt2.getTime() / (1000 * 60 * 60 * 24 * 7)).toFixed(0);

var timeDiffInWks = (weakOfDt1 >= weakOfDt2) ? weakOfDt1 - weakOfDt2: weakOfDt2 - weakOfDt1;

console.log("Time difference in weaks between ", dt1 , " and ", dt2, " is ", timeDiffInWks)






