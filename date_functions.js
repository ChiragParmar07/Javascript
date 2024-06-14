// date start in JavaScript is (jan 1st 1970)

// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
// new Date(milliseconds)

const d = new Date()

console.log(d) // Wed Dec 21 2022 10:06:30 GMT+0530 (India Standard Time)
console.log(d.getTime()) // 1671597373280
console.log(d.getHours()) // current Hour 10
console.log(d.getMinutes()) // current Minute 4
console.log(d.getSeconds()) // current Second 42
console.log(d.getMilliseconds()) // current millisecond 261
console.log(d.getDate()) // current Date  21
console.log(d.getMonth() + 1) // current Month 12
console.log(d.getFullYear()) // current year 2022

// ---------- toDateString() : toDateString() method converts a date to a more readable format
// console.log(d.toDateString());  // Wed Dec 21 2022

// ---------- toUTCString() : method converts a date to a string using the UTC standard (Universal Time Coordinated )
// console.log(d.toUTCString());  // Wed, 21 Dec 2022 04:39:02 GMT

// ---------- toISOString() : method converts a date to a string using the ISO standard (International Organization for Standardization)
// console.log(d.toISOString());  // 2022-12-21T04:39:41.048Z
