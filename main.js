// get Date
const today = new Date();

// day-num
const day = today.getDate();
document.querySelector('#day-num').textContent = day;

// dayName
const dayName = today.getDay();
switch (dayName) {
    case 0:
        document.querySelector('#day-name').textContent = 'Sunday'
        break;
    case 1:
        document.querySelector('#day-name').textContent = 'Monday'
        break;
    case 2:
        document.querySelector('#day-name').textContent = 'Tuesday'
        break;
    case 3:
        document.querySelector('#day-name').textContent = 'Wednesday'
        break;
    case 4:
        document.querySelector('#day-name').textContent = 'Thursday'
        break;
    case 5:
        document.querySelector('#day-name').textContent = 'Friday'
        break;
    default:
        document.querySelector('#day-name').textContent = 'Saturday'
        break;
}

// Get time in UTC
const utcHours = today.getUTCHours();
const utcMinutes = today.getUTCMinutes();
const utcSeconds = today.getUTCSeconds();

// Calculate Cairo time by adding the time zone offset
const egyptOffset = 2; // UTC +2 for Cairo
const egyptHours = utcHours + egyptOffset;
const egyptMinutes = utcMinutes;
const egyptSeconds = utcSeconds;

// Convert Cairo time to 12-hour format
const isPM = egyptHours >= 12;
const hours = egyptHours % 12;
const ampm = isPM ? "PM" : "AM";

// Update elements with Cairo time
document.querySelector('#hours').textContent = `${hours}`;
document.querySelector('#hour-time').textContent = `${ampm}`;
document.querySelector('#minutes').textContent = egyptMinutes;
document.getElementById('seconds').textContent = egyptSeconds;