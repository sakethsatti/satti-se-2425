const months = ['January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'];

const date = new Date();

// getmonth() returns the month as an integer [0 - 11], Jan = 0, Dec = 11
let month = months[date.getMonth()];
let day = date.getDate();
let year = date.getFullYear();

let currentDate = "The current date is: " + month + " " + day + ", " + year;

console.log(currentDate);
