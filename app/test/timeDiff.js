// To set two dates to two variables
var date1 = new Date("2023-07-21T12:12:00");
var date2 = new Date("2023-07-21T12:12:00");

// To calculate the time difference of two dates
var difference = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
let weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
let day = Math.floor((difference / (1000 * 60 * 60 * 24)) % 7);
let hour = Math.floor((difference / (1000 * 60 * 60)) % 24);
let minutes = Math.floor((difference / (1000 * 60)) % 60);
let seconds = Math.floor((difference / 1000) % 60);


console.log(`
      Weeks: ${weeks}
      Days: ${day}
      Hours: ${hour}
      Minutes: ${minutes}
      Seconds: ${seconds}
      `)