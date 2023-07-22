let date1 = new Date();
let date2 = new Date("2023-09-14T13:00:00");
let difference = date2.getTime() - date1.getTime();

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
