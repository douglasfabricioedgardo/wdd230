let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let monthsnames = [
    "January",
    "Febrary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let Dayname = daynames[d.getDay()];
let Monthname = monthsnames[d.getMonth()];
let fulldate = Dayname + ", " + Monthname + ", " + d.getDate() + ", " +
    d.getFullYear();
document.getElementById("current").textContent = fulldate;